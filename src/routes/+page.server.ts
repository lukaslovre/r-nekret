import { getCountsPerType, getProperties } from "../db/db_setup";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
  const propertyTypes: PropertyType[] = ["stan", "kuca", "poslovni", "zemljiste"];

  const properties: DbProperty[] = [];

  for (const type of propertyTypes) {
    const res = await getProperties(type);
    properties.push(...res);
  }

  const propertiesGroupedByType = properties.reduce((acc, curr) => {
    if (!acc[curr.type]) {
      acc[curr.type] = [];
    }
    acc[curr.type].push(curr);

    return acc;
  }, {} as Record<PropertyType, DbProperty[]>);

  const counts = await getCountsPerType();

  // console.log(properties);
  console.log(counts);

  return {
    status: 200,
    body: {
      properties: propertiesGroupedByType,
      countsPerType: counts,
    },
  } as {
    status: number;
    body: {
      properties: Record<PropertyType, DbProperty[]>;
      countsPerType: Record<PropertyType, number>;
    };
  };
};
