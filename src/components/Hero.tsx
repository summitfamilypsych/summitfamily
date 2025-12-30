import { Phone } from 'lucide-react';

interface HeroProps {
  onScheduleClick: () => void;
}

export default function Hero({ onScheduleClick }: HeroProps) {
  return (
    <div className="relative bg-gradient-to-br from-blue-50/90 via-cyan-50/90 to-sky-50/90 overflow-hidden">
      <div className="absolute inset-0 bg-white/50 backdrop-blur-sm"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Mental Health Services To<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60ABD4] to-[#3B82F6]">
              Support Your Well-Being
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-700 mb-4 font-medium">
            We're Here to Listen to You and Your Child's Needs
          </p>

          <p className="text-lg text-gray-600 mb-10">
            Serving Idaho and New York State
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={onScheduleClick}
              className="group bg-gradient-to-r from-[#60ABD4] to-[#3B82F6] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Schedule a Free 15-Min Call
            </button>

            <a
              href="tel:208-917-2086"
              className="group bg-white text-gray-900 px-8 py-4 rounded-full font-semibold text-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 border-2 border-gray-200 hover:border-[#60ABD4]"
            >
              Call Now: (208) 917-2086
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
}
