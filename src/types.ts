export interface Address {
  street: string[];
  suburb: string;
  postcode?: number;
  state: string;
}

export type AddressValueTypes = string | number | Array<any> | undefined;

export interface BusinessCardInfo {
  address: Address;
  email: string;
  name: string;
  phoneNumber?: string;
  title?: string;
  website?: string;
}
