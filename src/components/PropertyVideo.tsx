import { AspectRatio } from "@/components/ui/aspect-ratio";
import propertyVideo from "../assets/flat.mp4";

const PropertyVideo = () => {
  return (
    <div className="sticky top-8 animate-fade-in">
      <div className="rounded-lg overflow-hidden shadow-lg">
        <AspectRatio ratio={9 / 16}>
          <iframe
            src={propertyVideo}
            title="Property Video Tour"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-[90vh] object-cover"
          ></iframe>
        </AspectRatio>
      </div>
    </div>
  );
};

export default PropertyVideo;
