/*
  # Create Appointment and Contact Tables for Summit Family Psychology Services

  ## Overview
  This migration creates two tables to handle appointment scheduling and contact form submissions
  for the Summit Family Psychology Services website.

  ## New Tables

  ### `appointment_requests`
  Stores 15-minute phone call appointment requests from potential clients/patients
  - `id` (uuid, primary key) - Unique identifier
  - `name` (text) - Full name of the person requesting appointment
  - `email` (text) - Contact email address
  - `phone` (text) - Contact phone number
  - `preferred_date` (date) - Preferred date for the appointment
  - `preferred_time` (text) - Preferred time slot
  - `message` (text, optional) - Additional message or concerns
  - `status` (text) - Status of request (pending, confirmed, cancelled)
  - `created_at` (timestamptz) - When the request was submitted

  ### `contact_submissions`
  Stores general contact form submissions from website visitors
  - `id` (uuid, primary key) - Unique identifier
  - `name` (text) - Full name of the person
  - `email` (text) - Contact email address
  - `phone` (text, optional) - Contact phone number
  - `subject` (text) - Subject of the inquiry
  - `message` (text) - Detailed message
  - `created_at` (timestamptz) - When the submission was received

  ## Security
  - Both tables have RLS enabled
  - Public insert policies allow anyone to submit forms
  - Only authenticated staff can view submissions
  
  ## Important Notes
  1. These tables are designed for public form submissions
  2. No authentication required for inserting records (public access)
  3. Only staff with authentication can view and manage submissions
  4. Default status for appointments is 'pending'
*/

-- Create appointment_requests table
CREATE TABLE IF NOT EXISTS appointment_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  preferred_date date NOT NULL,
  preferred_time text NOT NULL,
  message text DEFAULT '',
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text DEFAULT '',
  subject text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS on both tables
ALTER TABLE appointment_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert appointment requests (public form submission)
CREATE POLICY "Anyone can submit appointment requests"
  ON appointment_requests
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow anyone to insert contact submissions (public form submission)
CREATE POLICY "Anyone can submit contact forms"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow authenticated users to view appointment requests
CREATE POLICY "Authenticated users can view appointment requests"
  ON appointment_requests
  FOR SELECT
  TO authenticated
  USING (true);

-- Allow authenticated users to view contact submissions
CREATE POLICY "Authenticated users can view contact submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);

-- Allow authenticated users to update appointment status
CREATE POLICY "Authenticated users can update appointments"
  ON appointment_requests
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);