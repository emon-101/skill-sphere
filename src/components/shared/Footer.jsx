import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGlobe
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#161439] text-gray-300 pt-12 pb-6">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">
              SkillSphere
            </h2>
            <p className="text-sm">
              Empowering learners with modern skills and real-world knowledge to
              grow their careers.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact Info
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt /> Barishal, Bangladesh
              </li>
              <li className="flex items-center gap-2">
                <FaPhoneAlt /> +880 1234 567 890
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope /> support@skillsphere.com
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/terms" className="hover:text-white transition">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-white transition">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 bg-white/10 rounded-full hover:bg-indigo-600 transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="p-2 bg-white/10 rounded-full hover:bg-indigo-600 transition"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="p-2 bg-white/10 rounded-full hover:bg-indigo-600 transition"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                className="p-2 bg-white/10 rounded-full hover:bg-indigo-600 transition"
              >
                <FaGlobe />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} SkillSphere. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
