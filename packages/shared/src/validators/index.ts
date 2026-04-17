import { z } from 'zod';

export const GridRequestSchema = z.object({
  resource: z.string(),
  page: z.number().optional().default(1),
  perPage: z.number().optional().default(20),
  filters: z.array(z.object({
    column: z.string(),
    operator: z.enum(['eq', 'neq', 'gt', 'lt', 'gte', 'lte', 'like', 'ilike', 'in', 'notIn', 'between', 'where']),
    value: z.any().optional(),
    value2: z.any().optional(),
  })).optional(),
  sorts: z.array(z.object({
    column: z.string(),
    order: z.enum(['asc', 'desc']),
  })).optional(),
  columns: z.array(z.string()).optional(),
  search: z.string().optional(),
});

export const LoginSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
  remember: z.boolean().optional(),
});

export const ChangePasswordSchema = z.object({
  old_password: z.string().min(1),
  new_password: z.string().min(6),
});

export const RoleSchema = z.object({
  name: z.string().min(1),
  slug: z.string().min(1),
  permissions: z.array(z.number()).optional(),
});

export const MenuItemSchema = z.object({
  parent_id: z.number().nullable().optional(),
  order: z.number().optional(),
  title: z.string().min(1),
  icon: z.string().optional(),
  uri: z.string().optional(),
  permission: z.string().optional(),
});
