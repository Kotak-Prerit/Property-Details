import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Check } from "lucide-react";
import { propertyData } from "@/data/propertyData";

const PropertyFeatures = () => {
  return (
    <section className="py-8 animate-fade-in">
      <div>
        <h2 className="text-2xl font-bold text-property-text mb-4">
          Amenities & Features
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {propertyData.amenities.map((amenity, index) => (
            <div key={index} className="flex items-start gap-2">
              <Check className="h-5 w-5 text-property-primary mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">{amenity}</span>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        <div className="flex flex-wrap gap-3">
          <Badge
            variant="outline"
            className="bg-white text-property-text px-3 py-1"
          >
            {propertyData.features.bedrooms} Bedroom
            {propertyData.features.bedrooms > 1 ? "s" : ""}
          </Badge>
          <Badge
            variant="outline"
            className="bg-white text-property-text px-3 py-1"
          >
            {propertyData.features.bathrooms} Bathroom
            {propertyData.features.bathrooms > 1 ? "s" : ""}
          </Badge>
          {propertyData.features.furnished && (
            <Badge
              variant="outline"
              className="bg-white text-property-text px-3 py-1"
            >
              Fully Furnished
            </Badge>
          )}
        </div>
      </div>
    </section>
  );
};

export default PropertyFeatures;
