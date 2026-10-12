export interface ICategory {
  description: string;
  icon: string;
  name: string;
  slug: string;
  _id: string;
}

export interface IProducts {
  brand: string;
  category: string;
  currentPrice: number;
  description: string;
  image: string;
  name: string;
  previousPrice: number;
  priceHistory: { date: string; price: number }[];
  slug: string;
  specs: {
    battery: string;
    camera: string;
    display: string;
    processor: string;
    ram: string;
    storage: string;
  };
  stores: {
    name: string;
    price: number;
    url: string;
  }[];
  trend: string;
  trendPercent: number;
  unit: string;
  _id: string;
}
