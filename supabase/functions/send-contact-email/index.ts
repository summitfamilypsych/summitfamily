import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface ContactSubmission {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const contactData: ContactSubmission = await req.json();

    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #f59e0b, #f97316); color: white; padding: 20px; border-radius: 10px; text-align: center; }
            .content { background: #f9fafb; padding: 20px; border-radius: 10px; margin-top: 20px; }
            .field { margin-bottom: 15px; padding: 10px; background: white; border-radius: 5px; }
            .label { font-weight: bold; color: #f97316; }
            .value { margin-top: 5px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Contact Form Submission</h1>
              <p>Summit Family Psychology Services</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Name:</div>
                <div class="value">${contactData.name}</div>
              </div>
              <div class="field">
                <div class="label">Email:</div>
                <div class="value">${contactData.email}</div>
              </div>
              ${contactData.phone ? `
              <div class="field">
                <div class="label">Phone:</div>
                <div class="value">${contactData.phone}</div>
              </div>
              ` : ''}
              <div class="field">
                <div class="label">Subject:</div>
                <div class="value">${contactData.subject}</div>
              </div>
              <div class="field">
                <div class="label">Message:</div>
                <div class="value">${contactData.message}</div>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    const resendApiKey = Deno.env.get('RESEND_API_KEY');
    
    if (!resendApiKey) {
      console.error('RESEND_API_KEY not configured');
      return new Response(
        JSON.stringify({ success: true, message: 'Message saved (email notification pending configuration)' }),
        {
          headers: {
            ...corsHeaders,
            'Content-Type': 'application/json',
          },
        }
      );
    }

    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: 'Summit Family <onboarding@resend.dev>',
        to: ['dswantek208@gmail.com'],
        subject: `Contact Form: ${contactData.subject}`,
        html: emailHtml,
      }),
    });

    if (!emailResponse.ok) {
      const errorData = await emailResponse.text();
      console.error('Resend API error:', errorData);

      return new Response(
        JSON.stringify({
          success: false,
          error: 'Failed to send email notification. Please try again or call us directly at (208) 917-2086.',
          details: errorData
        }),
        {
          status: 500,
          headers: {
            ...corsHeaders,
            'Content-Type': 'application/json',
          },
        }
      );
    }

    const emailResult = await emailResponse.json();
    console.log('Email sent successfully:', emailResult);

    return new Response(
      JSON.stringify({ success: true, message: 'Message submitted successfully' }),
      {
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('Error processing contact:', error);
    return new Response(
      JSON.stringify({ success: false, error: 'Failed to process contact submission' }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );
  }
});