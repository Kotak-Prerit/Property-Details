
import PropertyVideo from "@/components/PropertyVideo";
import PropertyDetails from "@/components/PropertyDetails";
import PropertyFeatures from "@/components/PropertyFeatures";

const Index = () => {
  return (
    <div className="min-h-screen py-8">
      <main className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-2/5">
            <PropertyVideo />
          </div>
          <div className="w-full md:w-3/5">
            <PropertyDetails />
            <PropertyFeatures />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
