export interface GridColumn {
  key: string;
  label: string;
  sortable?: boolean;
  filterable?: boolean;
  editable?: boolean;
  type?: 'text' | 'image' | 'switch' | 'select' | 'badge' | 'actions';
  width?: number;
  fixed?: 'left' | 'right';
  displayer?: string;
}

export interface GridFilter {
  column: string;
  operator: 'eq' | 'neq' | 'gt' | 'lt' | 'gte' | 'lte' | 'like' | 'ilike' | 'in' | 'notIn' | 'between' | 'where';
  value?: any;
  value2?: any;
}

export interface GridSort {
  column: string;
  order: 'asc' | 'desc';
}

export interface GridRequest {
  resource: string;
  page?: number;
  perPage?: number;
  filters?: GridFilter[];
  sorts?: GridSort[];
  columns?: string[];
  search?: string;
}

export interface GridResponse<T = any> {
  data: T[];
  total: number;
  page: number;
  perPage: number;
  totalPages: number;
}

export interface FormField {
  name: string;
  label?: string;
  type: string;
  required?: boolean;
  validation?: Record<string, any>;
  options?: { label: string; value: any }[];
  placeholder?: string;
  help?: string;
  default?: any;
  rules?: any;
}

export interface FormRequest {
  resource: string;
  fields: FormField[];
  data?: Record<string, any>;
}

export interface TreeNode {
  id: number;
  parent_id: number | null;
  order: number;
  title: string;
  icon?: string;
  uri?: string;
  children?: TreeNode[];
}

export interface User {
  id: number;
  username: string;
  email: string;
  name?: string;
  avatar?: string;
  roles?: Role[];
}

export interface Role {
  id: number;
  name: string;
  slug: string;
  permissions?: Permission[];
}

export interface Permission {
  id: number;
  name: string;
  slug: string;
  http_path?: string;
  http_method?: string;
}

export interface MenuItem {
  id: number;
  parent_id: number | null;
  order: number;
  title: string;
  icon?: string;
  uri?: string;
  permission?: string;
  children?: MenuItem[];
}

export interface OperationLog {
  id: number;
  user_id: number;
  method: string;
  uri: string;
  ip: string;
  input?: Record<string, any>;
  created_at: string;
}
