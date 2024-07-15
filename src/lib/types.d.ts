type PropertyType = "stan" | "kuca" | "poslovni" | "zemljiste";

type Property = {
  id: string;
  location: string;
  price: number;
  squareMeters: number;
  bedrooms: number;
  bathrooms: number;
  description: string;
  images: string[];
  features: string[];
  propertyType: PropertyType;
};

// {
//   adresa: 'VII. Ravnice, 24',
//   cijena: 15000,
//   collectionId: 'ondljz5iceux8f9',
//   collectionName: 'Nekretnine',
//   created: '2024-07-10 19:05:51.723Z',
//   grad: 'Zagreb',
//   id: 'yp9azal5yvebnbj',
//   kontakt: 'm3i1pkbblxrq1qy',
//   kvadratura: 64,
//   kvart: 'Ravnice',
//   lat: 45.81,
//   lon: 16,
//   nacrt: [ '40112_main_600x_RATnXPgN7s.webp' ],
//   opis: 'Lijepa i dobra kuća. Baš je dobra',
//   ostale_info: {
//     'Značajke': [ 'Dvorište', 'Bazen', 'WC' ],
//     Certifikati: [ 'Visoka energetska efikasnost' ]
//   },
//   slike: [
//     'building_image_res_u2VhlCue3g.jpg',
//     'most_beautiful_house_in_the_world_0_1200_iK8tgjLY60.jpg'
//   ],
//   updated: '2024-07-10 19:05:51.723Z'
// }

type DbProperty = {
  adresa: string;
  cijena: number;
  collectionId: string;
  collectionName: string;
  created: string;
  grad: string;
  id: string;
  kontakt: string;
  expand?: {
    kontakt: DbProdavac;
  };
  kvadratura: number;
  kvart: string;
  lat: number;
  lon: number;
  nacrt: string[];
  opis: string;
  ostale_info: {
    [key: string]: any[];
  };
  slike: string[];
  updated: string;
  type: PropertyType;
  spavace_sobe: number;
  kupaone: number;
};

// kontakt: {
//   collectionId: '5zfcd1cv3p5frah',
//   collectionName: 'Prodavaci',
//   created: '2024-07-10 16:26:36.856Z',
//   email: 'reanekretnine@gmail.com',
//   id: 'm3i1pkbblxrq1qy',
//   ime: 'Edita Kelečević',
//   mobitel: '099 235 9500 ',
//   opis: '',
//   updated: '2024-07-10 16:26:36.856Z'
// }

type DbProdavac = {
  collectionId: string;
  collectionName: string;
  id: string;
  slika: string;
  created: string;
  email: string;
  ime: string;
  mobitel: string;
  opis: string;
  updated: string;
};
