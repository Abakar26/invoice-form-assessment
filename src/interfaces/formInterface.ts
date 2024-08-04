export type Item = {
  name: string;
  quantity: number;
  amount: number;
  total: number;
};

export interface FormState {
  billFrom: {
    companyName: string;
    email: string;
    city: string;
    postalCode: string;
    country: string;
    address: string;
  };
  billTo: {
    companyName: string;
    email: string;
    city: string;
    postalCode: string;
    country: string;
    address: string;
  };
  invoiceDate: string;
  invoiceTerms: string;
  projectDescription: string;
  items: Item[];
}

export type Errors<T> = {
  [K in keyof T]?: T[K] extends object ? Errors<T[K]> : string;
};
