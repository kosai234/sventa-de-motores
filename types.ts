
export interface Car {
  id: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  specs: string;
  mileage: string;
  transmission: string;
  fuelType: string;
  imageUrl: string;
  tag?: string;
  tagColor?: string;
}

export interface BlogPost {
  id: string;
  category: string;
  readTime: string;
  title: string;
  excerpt: string;
  imageUrl: string;
}
