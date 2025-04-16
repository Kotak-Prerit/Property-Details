
import { Button } from "@/components/ui/button";
import { Home, Phone } from "lucide-react";
import { propertyData } from "@/data/propertyData";

const Navbar = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 shadow-sm animate-fade-in">
      <div className="container mx-auto py-4 px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Home className="h-5 w-5 text-property-primary" />
          <span className="text-lg font-medium text-property-text">Flat Peek</span>
        </div>
        
        <Button 
          onClick={scrollToContact}
          className="flex items-center gap-2 bg-property-primary hover:bg-property-accent transition-colors"
        >
          <Phone className="h-4 w-4" />
          <span className="hidden sm:inline">Contact</span>
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
