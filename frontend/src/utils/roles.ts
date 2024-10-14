export const userRoles = {
  customer: 'Khách hàng',
  consultingStaff: 'Nhân viên tư vấn',
  designStaff: 'Nhân viên thiết kế',
  constructionStaff: 'Nhân viên thi công',
  manager: 'Giám đốc',
} as const;

export const rolePermissions: Record<keyof typeof userRoles, string[]> = {
  customer: ['Trang chủ', 'Đơn hàng', 'Đánh giá'],
  consultingStaff: ['Trang chủ', 'Khách hàng', 'Đơn hàng'],
  designStaff: ['Trang chủ', 'Đơn hàng', 'Thi công'],
  constructionStaff: ['Trang chủ', 'Thi công', 'Báo cáo'],
  manager: ['Trang chủ', 'Khách hàng', 'Đơn hàng', 'Thi công', 'Báo cáo', 'Đánh giá'],
};