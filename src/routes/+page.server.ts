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
          images: [
            "https://rea-nekretnine.hr/media/2024/03/946E0D69-2202-4CC9-B798-76ED7DEA1A96-500x375.jpeg",
          ],
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
          images: [
            "https://rea-nekretnine.hr/media/2024/03/22A3FFFA-5CBA-472C-A44F-2181AA518D83-500x375.jpeg",
          ],
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
          images: [
            "https://rea-nekretnine.hr/media/2024/03/8340BE05-4A76-4D92-9C90-CD702F743461-500x375.jpeg",
          ],
          features: ["feature1", "feature2"],
          propertyType: "poslovni",
        },
      ],
    },
  } as {
    status: number;
    body: {
      properties: Property[];
    };
  };
};
