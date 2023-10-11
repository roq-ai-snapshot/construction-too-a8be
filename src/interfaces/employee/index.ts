import { UserInterface } from 'interfaces/user';
import { StoreInterface } from 'interfaces/store';
import { GetQueryInterface } from 'interfaces';

export interface EmployeeInterface {
  id?: string;
  user_id: string;
  store_id: string;
  hire_date: any;
  job_title: string;
  salary: number;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  store?: StoreInterface;
  _count?: {};
}

export interface EmployeeGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  store_id?: string;
  job_title?: string;
}
