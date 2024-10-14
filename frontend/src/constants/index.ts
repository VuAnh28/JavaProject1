import { Home, Users, FileText, BarChart, Star } from 'lucide-react';
import { UserRole, MenuItem } from '../types';

export const userRoles: Record<UserRole, string> = {
    customer: 'Khách hàng',
    consultingStaff: 'Nhân viên tư vấn',
    designStaff: 'Nhân viên thiết kế',
    constructionStaff: 'Nhân viên thi công',
    manager: 'Giám đốc',
};

export const rolePermissions: Record<UserRole, string[]> = {
    customer: ['Trang chủ', 'Đơn hàng', 'Đánh giá'],
    consultingStaff: ['Trang chủ', 'Khách hàng', 'Đơn hàng'],
    designStaff: ['Trang chủ', 'Đơn hàng', 'Thi công'],
    constructionStaff: ['Trang chủ', 'Thi công', 'Báo cáo'],
    manager: ['Trang chủ', 'Khách hàng', 'Đơn hàng', 'Thi công', 'Báo cáo', 'Đánh giá'],
};

export const allMenuItems: MenuItem[] = [
    { icon: Home, label: 'Trang chủ' },
    { icon: Users, label: 'Khách hàng' },
    { icon: FileText, label: 'Đơn hàng' },
    { icon: BarChart, label: 'Thi công' },
    { icon: FileText, label: 'Báo cáo' },
    { icon: Star, label: 'Đánh giá' },
];