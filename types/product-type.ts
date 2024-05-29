export type IReview = {
  user?:string;
  name:string;
  email:string;
  rating:number;
  review:string;
  date:string;
}

export interface IProduct {
  id: string;
  sku: string;
  img: string;
  title: string;
  slug: string;
  unit: string;
  imageURLs: {
    color?: {
  name: string;
      clrCode: string;
    };
  img: string;
  }[];
  parent: string;
  children: string;
  price: number;
  discount: number;
  quantity: number;
  brand: {
    name: string;
  };
  category: {
    name: string;
  };
  status: string;
  reviews?: IReview[];
  productType: string;
  description: string;
  orderQuantity?: number;
  additionalInformation: {
    key: string;
    value: string;
  }[];
  featured?: boolean;
  sellCount: number;
  offerDate?:{
    startDate:string;
    endDate:string;
  }
}

export interface IModel {
  id: string,
  makeid: string,
  name: string,
  alias: string,
  regex_name: string,
  ordering: number,
  description: null,
  state: boolean,
  access: number,
  metakey: null,
  metadesc: null,
  language: string,
  image: string,
  ecount: number
}

export interface IMakesOptions {
  id: string,
  parent_id: string,
  catid: string,
  label: string,
  value: string,
}

interface IMake {
  id: string;
  parent_id: string;
  catid: string;
  name: string;
  alias: string;
  regex_name: string;
  ordering: string;
  description: string;
  shortdesc: string;
  state: boolean;
  access: number;
  website: string;
  metakey: string;
  metadesc: string;
  language: string;
  image: string;
  map: string;
  ecount: number;
}

interface ICity {
  id: string;
  catid: string;
  city_zip: string;
  city_name: string;
  city_state: string;
  city_latitude: number;
  city_longitude: number;
  city_county: string;
  expicon: string;
  ordering: string;
  state: boolean;
  language: string;
  city_url: string;
}

export interface IOpt {
  style: string[],
  seats: string[],
  make: string[],
  length: string[],
  mileage: string[],
  model: string[],
  condition: string[]
}

export interface IShop {
  rvs: IProduct[],
  auto: IProduct[],
  boat: IProduct[],
  atv: IProduct[],
  motorcycle: IProduct[]
}

export interface Accessories {
  type: string;
  data: any[];
}

export interface IVehicleData {
  id: string;
  catid: string;
  extract_id: string;
  country: string;
  condition: string;
  user: string;
  salesuser: string;
  bodytype: string;
  bodytype_size: string;
  floorplan: string;
  image: string | null;
  drive: string;
  fuel: string;
  trans: string;
  equipment: string;
  year: number;
  month: number;
  vincode: string;
  mileage: string;
  price: string;
  bprice: string;
  call_for_price: number;
  map_price: string;
  payment: string;
  loan_term: number;
  loan_rate: number;
  loan_down_percent: number;
  loan_down_amount: number;
  loan_amount_financed: number;
  slide_outs: boolean;
  baths: boolean;
  air_cond: boolean;
  convertible: boolean;
  water_cap: number;
  grey_water: number;
  waste_water: number;
  deleted: boolean;
  extcolor: string;
  intcolor: string;
  doors: number;
  seats: number;
  awnings: string | null;
  axles: number;
  accessories: Accessories;
  engine: string;
  videolink: string | null;
  embedcode: string;
  fcommercial: boolean;
  ffeatured: boolean;
  ftop: boolean;
  special: boolean;
  craigslist: boolean;
  fauction: boolean;
  hits: string;
  ordering: string;
  state: boolean;
  expemail: boolean;
  otherinfo: string;
  unweight: string;
  grweight: string;
  length: string;
  length_in: string | null;
  width: string;
  displacement: string;
  metalliccolor: boolean;
  specificcolor: string;
  specificmodel: string;
  specifictrans: string;
  expprice: string;
  webmarketvalue: string;
  fconsumcity: string;
  fconsumfreeway: string;
  fconsumcombined: string;
  adacceleration: string;
  maxspeed: string;
  solid: boolean;
  co: string;
  params: string;
  language: string;
  access: number;
  extrafield1: string;
  extrafield2: string;
  extrafield3: string;
  city: ICity;
  vattext: boolean;
  stocknum: string;
  expstate: string;
  expreserved: boolean;
  street: string;
  latitude: string;
  longitude: string;
  zipcode: string;
  imgmain: string;
  imgcount: string | null;
  emailstyle: boolean;
  capacity: string;
  exptitle: string;
  alias: string;
  warranty: string;
  tow_req: string;
  sm_description: string;
  bunkbeds: boolean;
  motorhome_type: string;
  toyhauler: boolean;
  popup: boolean;
  slidein: boolean;
  images_deleted: boolean;
  dealer_paid_cost: string;
  creatdate: string;
  editdate: string;
  olddate: string | null;
  expirdate: string;
  questionadd: boolean;
  exchangeadd: boolean;
  auctionadd: boolean;
  auctionaddtype: number;
  youtube_id: string | null;
  virtual_tour: string | null;
  carfax: string;
  locked: boolean;
  thirdparty: boolean;
  features: boolean;
  make: IMake;
  model: IModel;
}