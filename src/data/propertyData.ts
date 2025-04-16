interface PropertyData {
  title: string;
  location: string;
  mapLink: string;
  price: string;
  description: string;
  features: {
    bedrooms: number;
    bathrooms: number;
    kitchen: number;
    livingRoom: number;
    furnished: boolean;
  };
  expenses: {
    rent: string;
    deposit: string;
    brokerage: string;
    maintenance: string;
    electricity: string;
    water: string;
    food: string;
    travel: string;
  };
  amenities: string[];
}

export const propertyData: PropertyData = {
  title: "श्री अक्षर Residency",
  location: "77VH+68G, Pavlepur, Gujarat 390019",
  mapLink:
    "https://www.google.com/maps/place/Shree+Akshar+Residency/@22.2926176,73.278277,3a,75y,353.17h,90.86t/data=!3m7!1e1!3m5!1sRoHJ2h_o5KYHi3egHxAhWQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-0.8597521466030003%26panoid%3DRoHJ2h_o5KYHi3egHxAhWQ%26yaw%3D353.16723880316533!7i13312!8i6656!4m6!3m5!1s0x395fdab346708903:0x45dd57a46f81c9a5!8m2!3d22.2930685!4d73.2783345!16s%2Fg%2F11gbncdyvz?entry=ttu&g_ep=EgoyMDI1MDQxNC4wIKXMDSoASAFQAw%3D%3D",
  price: "₹15000/month",
  description:
    "Modern fully furnished apartment with all amenities for comfortable living.",
  features: {
    bedrooms: 2,
    bathrooms: 2,
    kitchen: 1,
    livingRoom: 1,
    furnished: true,
  },
  expenses: {
    rent: "₹15000/month",
    deposit: "₹30000",
    brokerage: "₹15000 (one time)",
    maintenance: "₹500/month",
    electricity: "~₹2000/month",
    water: "Included in maintenance",
    food: "₹5500/month",
    travel: "₹1000/month (petrol)",
  },
  amenities: [
    "Sofa",
    "Elevator",
    "1 Air conditioner",
    "Fridge",
    "Geyser",
    "Shower",
    "Fan/Tube Light",
    "Washing Machine",
    "Balcony",
    "4 Wardrobes",
  ],
};
