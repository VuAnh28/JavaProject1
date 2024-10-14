import React from "react";

function OrderManagement() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Quản lý Đơn hàng</h2>
      <ul className="space-y-2">
        <li>• Danh sách đơn hàng</li>
        <li>• Tạo đơn hàng mới</li>
        <li>• Theo dõi trạng thái đơn hàng</li>
        <li>• Chi tiết đơn hàng (thiết kế, vật liệu, ...)</li>
        <li>• Lịch sử thay đổi và cập nhật</li>
      </ul>
    </div>
  );
}

export default OrderManagement;
