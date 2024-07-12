import PocketBase from "pocketbase";

// const ipAddr = "temporary-addr.zapto.org";
const ipAddr = "localhost";

const pb = new PocketBase(`http://${ipAddr}:9992`);

export const getCountsPerType = async () => {
  const types: PropertyType[] = ["stan", "kuca", "poslovni", "zemljiste"];

  const counts: Record<PropertyType, number> = {} as Record<PropertyType, number>;

  for (const type of types) {
    const res = await pb.collection("Nekretnine").getList(1, 1, {
      filter: `type = "${type}"`,
    });

    counts[type] = res.totalItems;
  }

  return counts;
};

export const getProperties = async (type?: PropertyType) => {
  const resultList = await pb.collection<DbProperty>("Nekretnine").getList(1, 6, {
    filter: type ? `type = "${type}"` : "",
    sort: "-created,id",
  });

  resultList.items = resultList.items.map((item) => {
    item.slike = item.slike.map((fileName) =>
      transformPocketbaseUrlToAbsolute(fileName, item.collectionName, item.id)
    );
    return item;
  });

  return resultList.items;
};

export const getPropertyById = async (id: string) => {
  const record = await pb.collection<DbProperty>("Nekretnine").getOne(id, {
    expand: "kontakt",
  });

  // Transform all image file names to absolute URLs

  record.slike = record.slike.map((fileName) =>
    transformPocketbaseUrlToAbsolute(fileName, record.collectionName, record.id)
  );

  record.nacrt = record.nacrt.map((fileName) =>
    transformPocketbaseUrlToAbsolute(fileName, record.collectionName, record.id)
  );

  if (record.expand) {
    record.expand.kontakt.slika = transformPocketbaseUrlToAbsolute(
      record.expand.kontakt.slika,
      record.expand.kontakt.collectionName,
      record.expand.kontakt.id
    );
  }

  return record;
};

export function transformPocketbaseUrlToAbsolute(
  fileName: string,
  collectionName: string,
  recordId: string
): string {
  //  http://127.0.0.1:8090/api/files/COLLECTION_ID_OR_NAME/RECORD_ID/FILENAME
  return `http://${ipAddr}:9992/api/files/${collectionName}/${recordId}/${fileName}`;
}
