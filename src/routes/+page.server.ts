import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
  return {
    status: 200,
    body: {
      properties: [
        {
          id: "1",
          location: "Zagreb",
          price: 100000,
          squareMeters: 100,
          bedrooms: 2,
          bathrooms: 1,
          description: "Lorem ipsum",
          images: ["https://via.placeholder.com/150"],
          features: ["feature1", "feature2"],
          propertyType: "stan",
        },
        {
          id: "2",
          location: "Split",
          price: 150000,
          squareMeters: 150,
          bedrooms: 3,
          bathrooms: 2,
          description: "Lorem ipsum",
          images: ["https://via.placeholder.com/150"],
          features: ["feature1", "feature2"],
          propertyType: "kuca",
        },
        {
          id: "3",
          location: "Osijek",
          price: 200000,
          squareMeters: 200,
          bedrooms: 4,
          bathrooms: 3,
          description: "Lorem ipsum",
          images: ["https://via.placeholder.com/150"],
          features: ["feature1", "feature2"],
          propertyType: "poslovni",
        },
      ],
    },
  } as {
    status: 200;
    body: {
      properties: Property[];
    };
  };
};
