import PocketBase from "pocketbase";

const pb = new PocketBase("http://127.0.0.1:9992");

export const getProperties = async () => {
  const resultList = await pb.collection("Nekretnine").getList(1, 10);

  return resultList;
};

export const getPropertyById = async (id: string) => {
  const record = (await pb.collection("Nekretnine").getOne(id, {
    expand: "kontakt",
  })) as DbProperty;

  // Transform all image file names to absolute URLs

  record.slike = record.slike.map((fileName) =>
    transformPocketbaseUrlToAbsolute(fileName, record.collectionName, record.id)
  );

  record.nacrt = record.nacrt.map((fileName) =>
    transformPocketbaseUrlToAbsolute(fileName, record.collectionName, record.id)
  );

  record.expand.kontakt.slika = transformPocketbaseUrlToAbsolute(
    record.expand.kontakt.slika,
    record.expand.kontakt.collectionName,
    record.expand.kontakt.id
  );

  return record;
};

export function transformPocketbaseUrlToAbsolute(
  fileName: string,
  collectionName: string,
  recordId: string
): string {
  //  http://127.0.0.1:8090/api/files/COLLECTION_ID_OR_NAME/RECORD_ID/FILENAME
  return `http://127.0.0.1:9992/api/files/${collectionName}/${recordId}/${fileName}`;
}
