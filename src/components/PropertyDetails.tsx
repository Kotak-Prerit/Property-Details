import { Separator } from "@/components/ui/separator";
import { propertyData } from "@/data/propertyData";

const PropertyDetails = () => {
  return (
    <section className="pb-8 animate-fade-in">
      <div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-property-text mb-2">
          {propertyData.title}
        </h1>
        <a
          href={propertyData.mapLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-property-primary transition-colors"
        >
          {propertyData.location}
        </a>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col items-center justify-center border border-black p-4 bg-property-light rounded-lg">
            <span className="text-xl font-semibold">
              {propertyData.features.bedrooms}
            </span>
            <span className="text-sm">Bedrooms</span>
          </div>
          <div className="flex flex-col items-center justify-center p-4 bg-property-light border border-black rounded-lg">
            <span className="text-xl font-semibold">
              {propertyData.features.bathrooms}
            </span>
            <span className="text-sm">Bathrooms</span>
          </div>
          <div className="flex flex-col items-center justify-center p-4 bg-property-light border border-black rounded-lg">
            <span className="text-xl font-semibold">
              {propertyData.features.kitchen}
            </span>
            <span className="text-sm">Kitchen</span>
          </div>
          <div className="flex flex-col items-center justify-center p-4 bg-property-light border border-black rounded-lg">
            <span className="text-xl font-semibold">
              {propertyData.features.livingRoom}
            </span>
            <span className="text-sm">Living Room</span>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-bold text-property-primary mb-2">
            {propertyData.price}
          </h2>
          {propertyData.features.furnished && (
            <span className="inline-block mt-1 text-sm bg-property-secondary text-property-text px-3 py-1 rounded-full">
              Fully Furnished
            </span>
          )}
        </div>

        <Separator className="my-8" />

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-property-text mb-4">
              Financial Details
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Rent</span>
                <span className="font-medium">
                  {propertyData.expenses.rent}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Deposit</span>
                <span className="font-medium">
                  {propertyData.expenses.deposit}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Brokerage Fee</span>
                <span className="font-medium">
                  {propertyData.expenses.brokerage}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Maintenance Fee</span>
                <span className="font-medium">
                  {propertyData.expenses.maintenance}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Expected Electricity Bill</span>
                <span className="font-medium">
                  {propertyData.expenses.electricity}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Water</span>
                <span className="font-medium">
                  {propertyData.expenses.water}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Food Cost (Estimate)</span>
                <span className="font-medium">
                  {propertyData.expenses.food}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Travel Cost (Estimate)</span>
                <span className="font-medium">
                  {propertyData.expenses.travel}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails;
