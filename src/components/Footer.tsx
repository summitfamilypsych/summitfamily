import { MapPin, Phone, Printer } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <img
                src="https://img1.wsimg.com/isteam/ip/abb69e89-f3ee-4a6f-b359-78a9909a4159/blob-6325f7a.png/:/rs=w:264,h:142,cg:true,m/cr=w:264,h:142/qt=q:95"
                alt="Summit Family Psychology Services"
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Compassionate mental health care for individuals and families in Idaho and New York State.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 text-[#60ABD4] flex-shrink-0" />
                <span className="text-gray-300">
                  2995 N Cole Rd, STE 225<br />
                  Boise, ID 83704
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#60ABD4] flex-shrink-0" />
                <a href="tel:208-917-2086" className="text-gray-300 hover:text-[#60ABD4] transition-colors">
                  (208) 917-2086
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Printer className="w-4 h-4 text-[#60ABD4] flex-shrink-0" />
                <span className="text-gray-300">(208) 330-4447</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Office Hours</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span>9:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday - Sunday</span>
                <span>Closed</span>
              </div>
              <p className="text-gray-400 mt-3 text-xs">
                Evening appointments available by request
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-xs text-gray-400 leading-relaxed mb-4">
            Our office does not discriminate (based on race, ethnicity, national origin, religion, sex, age,
            mental or physical disability or medical condition, sexual orientation, claims experience, medical
            history, evidence of insurability including conditions arising out of acts of domestic violence,
            disability, or genetic information) in the delivery of our health care services and accept for
            treatment any individual in need of the health care services we provide.
          </p>
          <p className="text-sm text-gray-500 text-center">
            © {new Date().getFullYear()} Summit Family Psychology Services, PLLC - All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
