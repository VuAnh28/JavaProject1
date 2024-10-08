# Dự án là một ứng dụng web "Quản lý đặt thi công hồ cá koi"

## Tổng quan

Dự án dùng công nghệ Java Spring Boot và ReactJS.
Bên cạnh đó dự án dùng docker để chạy cơ sở dữ liệu SQL Server (Điều này là một **dependency** của dự án).

## Setup Backend

### Cách 1: Sử dụng lệnh

1. Điều hướng đến thư mục `koi-pond-backend`.
2. Đảm bảo bạn đã cài đặt Java, Maven và Docker.
3. Tạo một file `.env` (hoặc đổi tên file `.env.example`) trong thư mục `koi-pond-backend` với nội dung sau:
   ```
   DB_PASSWORD=[your_password]
   ```
   Thay `your_password` bằng mật khẩu của SQL Server.
4. Chạy lệnh sau để build dự án:
   ```
   mvn clean install
   ```
5. Khởi động ứng dụng Spring Boot (đảm bảo máy bạn chưa dùng port 8080 và 1433):
   ```
   mvn spring-boot:run
   ```

### Cách 2: Sử dụng công cụ In IntelliJ IDEA

1. Mở thư mục `koi-pond-backend` bằng IntelliJ IDEA.
2. Đảm bảo bạn đã cài đặt Docker.
3. Và nhấn vào nút `Run` để chạy ứng dụng.

## Setup Frontend

1. Điều hướng đến thư mục `frontend`.
2. Đảm bảo bạn đã cài đặt Node.js.
3. Cài đặt các dependencies:
   ```
   npm install
   ```
4. Khởi động ứng dụng React (nó sẽ tự mở trình duyệt mặt định của bạn):
   ```
   npm start
   ```
