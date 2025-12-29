import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

interface HeaderProps {
  onScheduleClick: () => void;
  currentPage: string;
}

export default function Header({ onScheduleClick, currentPage }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigateToProviders = () => {
    window.location.hash = 'providers';
    setIsMobileMenuOpen(false);
  };

  const navigateToHome = () => {
    window.location.hash = 'home';
    setIsMobileMenuOpen(false);
  };

  const scrollToContact = () => {
    if (currentPage !== 'home') {
      window.location.hash = 'home';
      setTimeout(() => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <button onClick={navigateToHome} className="flex items-center">
            <img
              src="https://img1.wsimg.com/isteam/ip/abb69e89-f3ee-4a6f-b359-78a9909a4159/blob-6325f7a.png/:/rs=w:264,h:142,cg:true,m/cr=w:264,h:142/qt=q:95"
              alt="Summit Family Psychology Services"
              className="h-12 sm:h-14 w-auto"
            />
          </button>

          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={navigateToHome}
              className={`font-medium transition-colors ${
                currentPage === 'home'
                  ? 'text-[#60ABD4] font-semibold'
                  : 'text-gray-700 hover:text-[#60ABD4]'
              }`}
            >
              Home
            </button>
            <button
              onClick={navigateToProviders}
              className={`font-medium transition-colors ${
                currentPage === 'providers'
                  ? 'text-[#60ABD4] font-semibold'
                  : 'text-gray-700 hover:text-[#60ABD4]'
              }`}
            >
              Our Providers
            </button>
            <button
              onClick={scrollToContact}
              className="text-gray-700 hover:text-[#60ABD4] font-medium transition-colors"
            >
              Contact
            </button>
            <a
              href="tel:208-917-2086"
              className="flex items-center gap-2 text-gray-700 hover:text-[#60ABD4] font-medium transition-colors"
            >
              <Phone className="w-4 h-4" />
              (208) 917-2086
            </a>
            <button
              onClick={onScheduleClick}
              className="bg-gradient-to-r from-[#60ABD4] to-[#3B82F6] text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Schedule Call
            </button>
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-700"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col gap-4">
              <button
                onClick={navigateToHome}
                className={`font-medium transition-colors text-left ${
                  currentPage === 'home'
                    ? 'text-[#60ABD4] font-semibold'
                    : 'text-gray-700 hover:text-[#60ABD4]'
                }`}
              >
                Home
              </button>
              <button
                onClick={navigateToProviders}
                className={`font-medium transition-colors text-left ${
                  currentPage === 'providers'
                    ? 'text-[#60ABD4] font-semibold'
                    : 'text-gray-700 hover:text-[#60ABD4]'
                }`}
              >
                Our Providers
              </button>
              <button
                onClick={scrollToContact}
                className="text-gray-700 hover:text-[#60ABD4] font-medium transition-colors text-left"
              >
                Contact
              </button>
              <a
                href="tel:208-917-2086"
                className="flex items-center gap-2 text-gray-700 hover:text-[#60ABD4] font-medium transition-colors"
              >
                <Phone className="w-4 h-4" />
                (208) 917-2086
              </a>
              <button
                onClick={() => {
                  onScheduleClick();
                  setIsMobileMenuOpen(false);
                }}
                className="bg-gradient-to-r from-[#60ABD4] to-[#3B82F6] text-white px-6 py-3 rounded-full font-semibold text-center"
              >
                Schedule Call
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
