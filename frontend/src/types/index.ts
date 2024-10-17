import { LucideIcon } from 'lucide-react';

export type UserRole = 'customer' | 'consultingStaff' | 'designStaff' | 'constructionStaff' | 'manager';

export interface MenuItem {
    icon: LucideIcon;
    label: string;
}