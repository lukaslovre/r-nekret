import { getContacts } from "../../db/db_setup";

export const load = async () => {
  const prodavaci = await getContacts();
  console.log(prodavaci);

  return {
    prodavaci,
  };
};
