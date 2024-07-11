import { getCountsPerType, getProperties } from "../db/db_setup";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
  const properties = await getProperties();
  const counts = await getCountsPerType();

  // console.log(properties);
  console.log(counts);

  return {
    status: 200,
    body: {
      properties: properties,
      countsPerType: counts,
    },
  } as {
    status: number;
    body: {
      properties: DbProperty[];
      countsPerType: Record<PropertyType, number>;
    };
  };
};
