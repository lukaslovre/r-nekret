import type { PageServerLoad } from "../../$types";
import { getPropertyById } from "../../../db/db_setup";

export const load: PageServerLoad = async ({ params }) => {
  const { slug } = params as { slug: string };

  const property = await getPropertyById(slug);
  console.log(property);

  return {
    property,
  };
};
