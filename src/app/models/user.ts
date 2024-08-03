export interface User {
  id?: number;
  name: string;
  surname: string;
  fiscalCode: string;
  address?: string;
  cap?: number;
  city?: string;
  country?: string;
  phone?: string; //for international num
  mobile: string; //for international num
  email: string;
}
