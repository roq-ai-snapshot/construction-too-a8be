import { SupplierInterface } from 'interfaces/supplier';
import { StoreInterface } from 'interfaces/store';
import { GetQueryInterface } from 'interfaces';

export interface ToolInterface {
  id?: string;
  name: string;
  description?: string;
  rental_price: number;
  quantity: number;
  supplier_id: string;
  store_id: string;
  created_at?: any;
  updated_at?: any;

  supplier?: SupplierInterface;
  store?: StoreInterface;
  _count?: {};
}

export interface ToolGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  supplier_id?: string;
  store_id?: string;
}
