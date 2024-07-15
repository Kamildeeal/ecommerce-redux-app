export interface Review {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

export interface Product {
  id: number;
  title: string;
  images: string[];
  price: number;
  description: string;
  category: string;
  rating: number;
  brand: string | null;
  availabilityStatus: string;
  warrantyInformation: string;
  shippingInformation: string;
  reviews: Review[];
}

export interface CartProduct extends Product {
  quantity: number;
  image: string[];
}
