export type EmailCreateInput = {
  subject?: string | null;
  body?: string | null;
  sender?: string | null;
  receivedAt?: Date | null;
  processed?: boolean | null;
};
