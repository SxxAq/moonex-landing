import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-6 lg:px-20">
      <div className="flex items-center">
        <img src="/moonex-logo.png" alt="Moonex" className="h-8 w-8 mr-2" />
        <span className="text-xl font-bold">Moonex</span>
      </div>
      <ul className="hidden md:flex space-x-6">
        <li>
          <a href="#" className="hover:text-yellow-400">
            Home
          </a>
        </li>
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
      <Button className="bg-yellow-400 text-black hover:bg-yellow-500">
        Connect Wallet
      </Button>
    </nav>
  );
};

export default Navbar;
