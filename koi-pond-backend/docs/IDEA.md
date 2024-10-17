# Danh sách API đề xuất

## 1. Customer API
- GET /api/customers - Lấy danh sách khách hàng
- GET /api/customers/{id} - Lấy thông tin chi tiết của một khách hàng
- POST /api/customers - Tạo mới khách hàng
- PUT /api/customers/{id} - Cập nhật thông tin khách hàng
- DELETE /api/customers/{id} - Xóa khách hàng

## 2. Project API
- GET /api/projects - Lấy danh sách dự án
- GET /api/projects/{id} - Lấy thông tin chi tiết của một dự án
- POST /api/projects - Tạo mới dự án
- PUT /api/projects/{id} - Cập nhật thông tin dự án
- DELETE /api/projects/{id} - Xóa dự án
- GET /api/projects/{id}/orders - Lấy danh sách đơn hàng của một dự án

## 3. Order API
- GET /api/orders - Lấy danh sách đơn hàng
- GET /api/orders/{id} - Lấy thông tin chi tiết của một đơn hàng
- POST /api/orders - Tạo mới đơn hàng
- PUT /api/orders/{id} - Cập nhật thông tin đơn hàng
- DELETE /api/orders/{id} - Xóa đơn hàng
- GET /api/orders/{id}/services - Lấy danh sách dịch vụ của một đơn hàng
- PUT /api/orders/{id}/status - Cập nhật trạng thái đơn hàng

## 4. Service API
- GET /api/services - Lấy danh sách dịch vụ
- GET /api/services/{id} - Lấy thông tin chi tiết của một dịch vụ
- POST /api/services - Tạo mới dịch vụ
- PUT /api/services/{id} - Cập nhật thông tin dịch vụ
- DELETE /api/services/{id} - Xóa dịch vụ

## 5. Feedback API
- GET /api/feedbacks - Lấy danh sách phản hồi
- GET /api/feedbacks/{id} - Lấy thông tin chi tiết của một phản hồi
- POST /api/feedbacks - Tạo mới phản hồi
- PUT /api/feedbacks/{id} - Cập nhật thông tin phản hồi
- DELETE /api/feedbacks/{id} - Xóa phản hồi
- GET /api/customers/{id}/feedbacks - Lấy danh sách phản hồi của một khách hàng

## 6. Rating API
- GET /api/ratings - Lấy danh sách đánh giá
- GET /api/ratings/{id} - Lấy thông tin chi tiết của một đánh giá
- POST /api/ratings - Tạo mới đánh giá
- PUT /api/ratings/{id} - Cập nhật thông tin đánh giá
- DELETE /api/ratings/{id} - Xóa đánh giá
- GET /api/customers/{id}/ratings - Lấy danh sách đánh giá của một khách hàng

## 7. Authentication API
- POST /api/auth/login - Đăng nhập
- POST /api/auth/logout - Đăng xuất
- POST /api/auth/register - Đăng ký tài khoản mới
- GET /api/auth/me - Lấy thông tin người dùng hiện tại

## 8. Dashboard API
- GET /api/dashboard/stats - Lấy thống kê tổng quan
- GET /api/dashboard/recent-projects - Lấy danh sách dự án gần đây
- GET /api/dashboard/recent-orders - Lấy danh sách đơn hàng gần đây
- GET /api/dashboard/top-customers - Lấy danh sách khách hàng hàng đầu

## 9. Koi Pond API
- GET /api/koi-ponds - Lấy danh sách hồ cá Koi
- GET /api/koi-ponds/{id} - Lấy thông tin chi tiết của một hồ cá Koi
- POST /api/koi-ponds - Tạo mới hồ cá Koi
- PUT /api/koi-ponds/{id} - Cập nhật thông tin hồ cá Koi
- DELETE /api/koi-ponds/{id} - Xóa hồ cá Koi
- GET /api/koi-ponds/{id}/maintenance-history - Lấy lịch sử bảo dưỡng của hồ cá Koi
- POST /api/koi-ponds/{id}/schedule-maintenance - Lên lịch bảo dưỡng cho hồ cá Koi

### Example
```json
{
    "name": "Hồ cá Koi 1",
    "length": 10,
    "width": 5,
    "depth": 2,
    "volume": 100,
    "description": "Hồ cá Koi 1"
}
```

Link diagram: [Koi Pond Diagram](https://drive.google.com/file/d/1hfSdovjzpM7J4mnaVAX2qt64YM2hk9bf/view?usp=sharing)

## 10. Koi Fish API
- GET /api/koi-fish - Lấy danh sách cá Koi
- GET /api/koi-fish/{id} - Lấy thông tin chi tiết của một con cá Koi
- POST /api/koi-fish - Thêm cá Koi mới vào hồ
- PUT /api/koi-fish/{id} - Cập nhật thông tin cá Koi
- DELETE /api/koi-fish/{id} - Xóa cá Koi khỏi hồ
- GET /api/koi-ponds/{id}/koi-fish - Lấy danh sách cá Koi trong một hồ cụ thể

## 11. Maintenance Service API
- GET /api/maintenance-services - Lấy danh sách dịch vụ bảo dưỡng
- GET /api/maintenance-services/{id} - Lấy thông tin chi tiết của một dịch vụ bảo dưỡng
- POST /api/maintenance-services - Tạo mới dịch vụ bảo dưỡng
- PUT /api/maintenance-services/{id} - Cập nhật thông tin dịch vụ bảo dưỡng
- DELETE /api/maintenance-services/{id} - Xóa dịch vụ bảo dưỡng
- POST /api/maintenance-services/{id}/schedule - Đặt lịch dịch vụ bảo dưỡng

## 12. Koi Pond Design API
- GET /api/pond-designs - Lấy danh sách mẫu thiết kế hồ cá Koi
- GET /api/pond-designs/{id} - Lấy thông tin chi tiết của một mẫu thiết kế
- POST /api/pond-designs - Tạo mới mẫu thiết kế hồ cá Koi
- PUT /api/pond-designs/{id} - Cập nhật thông tin mẫu thiết kế
- DELETE /api/pond-designs/{id} - Xóa mẫu thiết kế
- GET /api/pond-designs/{id}/cost-estimate - Lấy ước tính chi phí cho một mẫu thiết kế