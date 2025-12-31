import { useState } from 'react';
import { Calendar, Clock, X, CheckCircle, Phone } from 'lucide-react';

interface AppointmentSchedulerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AppointmentScheduler({ isOpen, onClose }: AppointmentSchedulerProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferred_date: '',
    preferred_time: '',
    message: '',
  });
  const [isSuccess, setIsSuccess] = useState(false);

  const timeSlots = [
    '9:00 AM - 9:15 AM',
    '9:30 AM - 9:45 AM',
    '10:00 AM - 10:15 AM',
    '10:30 AM - 10:45 AM',
    '11:00 AM - 11:15 AM',
    '1:00 PM - 1:15 PM',
    '1:30 PM - 1:45 PM',
    '2:00 PM - 2:15 PM',
    '2:30 PM - 2:45 PM',
    '3:00 PM - 3:15 PM',
    '3:30 PM - 3:45 PM',
    '4:00 PM - 4:15 PM',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = `Appointment Request - ${formData.name}`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Preferred Date: ${formData.preferred_date}
Preferred Time: ${formData.preferred_time}
Message: ${formData.message || 'N/A'}
    `.trim();

    window.location.href = `mailto:info@yourdomain.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setIsSuccess(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      preferred_date: '',
      preferred_time: '',
      message: '',
    });

    setTimeout(() => {
      setIsSuccess(false);
      onClose();
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const today = new Date().toISOString().split('T')[0];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="sticky top-0 bg-gradient-to-r from-[#60ABD4] to-[#3B82F6] text-white p-6 flex justify-between items-center rounded-t-3xl">
          <div>
            <h2 className="text-2xl font-bold">Schedule Your Free 15-Minute Call</h2>
            <p className="text-blue-50 mt-1">Let's start your journey to wellness together</p>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:bg-white/20 p-2 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {isSuccess ? (
          <div className="p-12 text-center">
            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Submitted!</h3>
            <p className="text-gray-600">
              Thank you for reaching out. We'll contact you within 24 hours to confirm your appointment.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 text-center">
              <p className="text-gray-700 font-semibold mb-3">Prefer to talk right now?</p>
              <a
                href="tel:208-917-2086"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
              >
                <Phone className="w-5 h-5" />
                Call Now: (208) 917-2086
              </a>
              <p className="text-sm text-gray-600 mt-3">Available Monday - Friday, 9 AM - 5 PM</p>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500 font-medium">Or schedule a callback</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#60ABD4] focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#60ABD4] focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all outline-none"
                placeholder="(208) 123-4567"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Preferred Date *
                </label>
                <input
                  type="date"
                  name="preferred_date"
                  value={formData.preferred_date}
                  onChange={handleChange}
                  min={today}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#60ABD4] focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Preferred Time *
                </label>
                <select
                  name="preferred_time"
                  value={formData.preferred_time}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#60ABD4] focus:ring-2 focus:ring-blue-200 transition-all outline-none bg-white"
                >
                  <option value="">Select a time</option>
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                What would you like to discuss? (Optional)
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all outline-none resize-none"
                placeholder="Tell us a bit about what brings you here today..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#60ABD4] to-[#3B82F6] text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Request Appointment
            </button>

            <p className="text-center text-sm text-gray-500">
              We'll contact you within 24 hours to confirm your appointment time
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
