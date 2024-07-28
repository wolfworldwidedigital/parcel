export type Product = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  importSource: string | null;
  imageUrl: string | null;
  title: string | null;
  description: string | null;
};
