import { GraduationCap, Heart, Briefcase, Users, Phone, Calendar } from 'lucide-react';

interface ProvidersPageProps {
  onScheduleClick: () => void;
}

export default function ProvidersPage({ onScheduleClick }: ProvidersPageProps) {
  const insuranceProviders = [
    'Blue Cross',
    'Blue Shield',
    'CDPHP',
    'Magellan',
    'Medicaid',
    'MVP Health Care',
    'Optum',
    'PacificSource',
    'Regence',
    'SelectHealth',
    'St. Luke\'s Health Partners',
    'Tricare/TriWest',
    'UnitedHealthcare',
    'Private Pay',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white/50 via-blue-50/20 to-white/50 backdrop-blur-sm">
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Meet Our Providers</h1>
            <p className="text-xl text-gray-600">
              Experienced, compassionate professionals dedicated to your wellness
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-xl overflow-hidden border border-blue-100">
              <div className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#60ABD4] to-[#3B82F6] rounded-2xl transform rotate-3"></div>
                      <img
                        src="https://img1.wsimg.com/isteam/ip/abb69e89-f3ee-4a6f-b359-78a9909a4159/headshot.png/:/cr=t:13.29%25,l:13.24%25,w:73.53%25,h:73.41%25/rs=w:400,h:533.3333333333334,cg:true,m"
                        alt="Griffith Jenkins"
                        className="relative w-48 h-60 md:w-56 md:h-72 object-cover rounded-2xl shadow-2xl"
                      />
                    </div>
                  </div>

                  <div className="flex-1">
                    <h2 className="text-4xl font-bold text-gray-900 mb-2">Griffith Jenkins</h2>
                    <p className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#60ABD4] to-[#3B82F6]">
                      LMHC, LPC
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                    <div className="flex items-start gap-3">
                      <div className="bg-gradient-to-br from-[#60ABD4] to-[#3B82F6] p-2 rounded-lg flex-shrink-0 mt-1">
                        <GraduationCap className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Education</h3>
                        <p className="text-gray-600 leading-relaxed">
                          Master of Science in Mental Health Counseling from the University at Albany, State University of New York.
                          Bachelor of Science in Psychology with a minor in Biology from Idaho State University.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-gradient-to-br from-[#3B82F6] to-[#2563EB] p-2 rounded-lg flex-shrink-0 mt-1">
                        <Briefcase className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Experience</h3>
                        <p className="text-gray-600 leading-relaxed">
                          Griffith has worked with children, adolescents, and adults in diverse populations and settings
                          including schools, foster care, and private agencies. He is licensed in Idaho and New York and
                          currently resides in Idaho, providing services in both states via in-person and telehealth.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-gradient-to-br from-[#60ABD4] to-[#4F9FD4] p-2 rounded-lg flex-shrink-0 mt-1">
                        <Heart className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Specializations</h3>
                        <p className="text-gray-600 leading-relaxed">
                          Training and expertise in emotional and behavioral regulation, trauma, crisis management,
                          depression, anxiety, addiction, interpersonal issues, and school-related challenges.
                          Experience includes Employee Assistance Program (EAP) counseling and community resource referrals.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-gradient-to-br from-[#3B82F6] to-[#2563EB] p-2 rounded-lg flex-shrink-0 mt-1">
                        <Users className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Therapeutic Approach</h3>
                        <p className="text-gray-600 leading-relaxed">
                          Person-centered approach utilizing cognitive-behavioral therapy, rational emotive behavior therapy,
                          play therapy, solution-focused skill building, and creative activities to challenge and build upon
                          clients' strengths.
                        </p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-200">
                      <h3 className="font-semibold text-gray-900 mb-3">Insurance Accepted</h3>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        {insuranceProviders.map((provider) => (
                          <div key={provider} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-gradient-to-r from-[#60ABD4] to-[#3B82F6] rounded-full"></div>
                            <span className="text-gray-700">{provider}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 border border-gray-200">
                    <p className="text-gray-600 text-sm leading-relaxed italic">
                      Outside of providing counseling, Griffith loves to spend time with his family, play games,
                      and spend time in the great outdoors.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl shadow-lg border border-blue-200 p-8 md:p-12">
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Take the first step towards better mental health. Schedule a consultation or give us a call to learn more about our services.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={onScheduleClick}
                    className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#60ABD4] to-[#3B82F6] text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 text-lg"
                  >
                    <Calendar className="w-5 h-5" />
                    Schedule Call
                  </button>

                  <a
                    href="tel:208-917-2086"
                    className="flex items-center justify-center gap-2 bg-white text-gray-900 border-2 border-[#60ABD4] px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 text-lg"
                  >
                    <Phone className="w-5 h-5" />
                    Call (208) 917-2086
                  </a>
                </div>

                <div className="mt-8 pt-8 border-t border-blue-200">
                  <p className="text-sm text-gray-600">
                    <strong>Office Location:</strong> 2995 N Cole Rd, STE 225, Boise, ID 83704
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    <strong>Fax:</strong> 208-330-4447
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
