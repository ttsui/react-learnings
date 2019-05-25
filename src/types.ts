export interface Address {
  street: string[];
  suburb: string;
  postcode?: number;
  state: string;
}

export interface BusinessCardInfo {
  address: Address;
  phoneNumber: string;
}
