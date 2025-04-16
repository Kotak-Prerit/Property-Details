
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, User } from "lucide-react";
import { propertyData } from "@/data/propertyData";

const ContactSection = () => {
  return (
    <section id="contact" className="py-12 animate-fade-in">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl font-bold text-property-text mb-8 text-center">
          Interested in Renting?
        </h2>
        
        <Card className="max-w-xl mx-auto shadow-lg border-property-primary/10">
          <CardContent className="p-6">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-property-primary/10 flex items-center justify-center flex-shrink-0">
                  <User className="h-6 w-6 text-property-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Landlord</p>
                  <p className="font-medium text-property-text">{propertyData.contact.name}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-property-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-property-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="font-medium text-property-text">{propertyData.contact.phone}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-property-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-property-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium text-property-text">{propertyData.contact.email}</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  className="flex-1 bg-property-primary hover:bg-property-accent"
                  onClick={() => window.location.href = `tel:${propertyData.contact.phone.replace(/\D/g, '')}`}
                >
                  Call Now
                </Button>
                <Button 
                  variant="outline" 
                  className="flex-1 border-property-primary text-property-primary hover:bg-property-primary/5"
                  onClick={() => window.location.href = `mailto:${propertyData.contact.email}`}
                >
                  Send Email
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;
