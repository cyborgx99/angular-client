export interface Item {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  categories: string[];
  creator: unknown; //TODO: Fix
  creatorId: string;
}
