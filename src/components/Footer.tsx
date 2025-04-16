
import { Home } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 animate-fade-in">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="flex items-center gap-2 mb-4">
            <Home className="h-5 w-5 text-property-primary" />
            <span className="text-lg font-medium text-property-text">Flat Peek</span>
          </div>
          
          <p className="text-gray-500 text-sm mb-6 max-w-lg">
            Find your perfect rental property. Our listings feature detailed information and virtual tours to help you make the right choice.
          </p>
          
          <div className="text-xs text-gray-400">
            © {new Date().getFullYear()} Flat Peek. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
