import { EmployeeInterface } from 'interfaces/employee';
import { ToolInterface } from 'interfaces/tool';
import { SupplierInterface } from 'interfaces/supplier';
import { GetQueryInterface } from 'interfaces';

export interface StoreInterface {
  id?: string;
  name: string;
  address: string;
  contact_number: string;
  opening_hours?: any;
  closing_hours?: any;
  supplier_id: string;
  created_at?: any;
  updated_at?: any;
  employee?: EmployeeInterface[];
  tool?: ToolInterface[];
  supplier?: SupplierInterface;
  _count?: {
    employee?: number;
    tool?: number;
  };
}

export interface StoreGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  address?: string;
  contact_number?: string;
  supplier_id?: string;
}
