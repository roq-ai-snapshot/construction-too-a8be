import { StoreInterface } from 'interfaces/store';
import { ToolInterface } from 'interfaces/tool';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface SupplierInterface {
  id?: string;
  description?: string;
  address?: string;
  contact_number?: string;
  opening_hours?: any;
  closing_hours?: any;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  store?: StoreInterface[];
  tool?: ToolInterface[];
  user?: UserInterface;
  _count?: {
    store?: number;
    tool?: number;
  };
}

export interface SupplierGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  address?: string;
  contact_number?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
