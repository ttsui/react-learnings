export interface Address {
  street: string[];
  suburb: string;
  postcode?: number;
  state: string;
}

export interface BusinessCardInfo {
  address: Address;
  email: string;
  name: string;
  phoneNumber?: string;
  title?: string;
  website?: string;
}
