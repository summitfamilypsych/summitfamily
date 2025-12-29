import { Users, Target, Award } from 'lucide-react';
import ourPracticeImg from '../assets/our_practice_image.webp';
import ourServicesImg from '../assets/our_services_photo.webp';
import ourPromiseImg from '../assets/our_patient_promise_image.webp';

export default function AboutServices() {
  const features = [
    {
      icon: Users,
      title: 'Our Practice',
      description:
        'Our experience enables us to offer effective outpatient, individualized, mental health services. We treat those struggling with anxiety, depression, and mood disorders while providing a neutral ground to individuals and families.',
      gradient: 'from-[#60ABD4] to-[#3B82F6]',
      image: ourPracticeImg,
    },
    {
      icon: Target,
      title: 'Our Treatment Focus',
      description:
        'Our focus is to help children, adolescents, and adults heal, energize, and become aware of their inner strengths within the family unit. We achieve this by providing a neutral safe space, listening to your concerns, and customizing a treatment plan.',
      gradient: 'from-[#3B82F6] to-[#2563EB]',
      image: ourServicesImg,
    },
    {
      icon: Award,
      title: 'Our Patient Promise',
      description:
        'We promise to be there for every step of your journey. Our goal is to help you grow from your struggles, heal from your pain, and get to the Summit of your life!',
      gradient: 'from-[#60ABD4] to-[#4F9FD4]',
      image: ourPromiseImg,
    },
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Who We Are</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Compassionate mental health care for individuals and families
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#60ABD4]"
              >
                <div className="relative h-64 overflow-hidden bg-gray-50 flex items-center justify-center">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300 p-4"
                  />
                </div>

                <div className="p-8">
                  <div
                    className={`bg-gradient-to-br ${feature.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
