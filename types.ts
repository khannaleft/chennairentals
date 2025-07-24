
export interface RentalItem {
  id: number;
  name: string;
  price: { // Price per day in INR
    from: number;
    to?: number;
  };
  imageUrl: string;
  categoryName: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  items: RentalItem[];
}
