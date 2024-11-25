import { Twitter, Github, DiscIcon as Discord } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1C1C24] py-10 px-6 lg:px-20">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-6 md:mb-0">
          <img src="/moonex-logo.png" alt="Moonex" className="h-8 w-8 mr-2" />
          <span className="text-xl font-bold">Moonex</span>
        </div>
        <ul className="flex space-x-6 mb-6 md:mb-0">
          <li>
            <a href="#" className="hover:text-yellow-400">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-400">
              Roadmap
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-400">
              FAQs
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-400">
              Contact Us
            </a>
          </li>
        </ul>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-yellow-400">
            <Twitter />
          </a>
          <a href="#" className="text-gray-400 hover:text-yellow-400">
            <Github />
          </a>
          <a href="#" className="text-gray-400 hover:text-yellow-400">
            <Discord />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
