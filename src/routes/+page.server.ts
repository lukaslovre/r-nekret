import { getProperties } from "../db/db_setup";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
  const properties = await getProperties();

  console.log(properties);

  return {
    status: 200,
    body: {
      properties: properties,
    },
  } as {
    status: number;
    body: {
      properties: DbProperty[];
    };
  };
};
