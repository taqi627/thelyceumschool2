import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm mb-4">&copy; The Lyceum School, All Rights Reserved.</p>
        <ul className="flex justify-center space-x-6">
          <li>
            <a
              href="https://www.facebook.com/thelyceumschools"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500 transition"
            >
              <FontAwesomeIcon icon={faFacebook} className="w-6 h-6" />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/thelyceumschool"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition"
            >
              <FontAwesomeIcon icon={faTwitter} className="w-6 h-6" />
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-500 transition"
            >
              <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;