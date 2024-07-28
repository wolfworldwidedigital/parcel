export type Email = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  subject: string | null;
  body: string | null;
  sender: string | null;
  receivedAt: Date | null;
  processed: boolean | null;
};
