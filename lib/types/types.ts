export interface Product {
  id: number;
  title: string;
  images: string[];
  price: number;
  description: string;
  category: string;
  rating: number;
  reviews: Review[];
}

export interface Review {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}
