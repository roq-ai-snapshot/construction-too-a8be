import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CustomerInterface {
  id?: string;
  user_id: string;
  address: string;
  contact_number: string;
  registration_date: any;
  is_active: boolean;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface CustomerGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  address?: string;
  contact_number?: string;
}
