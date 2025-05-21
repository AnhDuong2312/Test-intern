# 📋 My Todo App

> Ứng dụng quản lý công việc (Todo) nhẹ, nhanh và hiện đại, sử dụng React + TypeScript + Vite + Tailwind CSS + Material UI + Redux Toolkit + dnd-kit.

---

## 🚀 Tính năng chính

- **CRUD Todo**  
  - Tạo, đọc, cập nhật, xóa công việc  
  - Không cho phép thêm công việc rỗng
- **Đánh dấu hoàn thành**  
  - Checkbox chuyển trạng thái hoàn thành/chưa hoàn thành  
  - Giao diện công việc hoàn thành có gạch ngang hoặc đổi màu
- **Kéo-thả sắp xếp**  
  - Sử dụng `@dnd-kit` để sắp xếp thứ tự công việc
- **Lưu dữ liệu localStorage**  
  - Đồng bộ Redux store với `localStorage`  
  - Tải lại trang vẫn giữ nguyên danh sách
- **UI hiện đại**  
  - Kết hợp Material UI và Tailwind CSS  
- **Biểu đồ thống kê**  
  - Hiển thị thống kê cơ bản với Recharts
- **Tối ưu hiệu năng**  
  - Vite cho khởi động và rebuild cực nhanh
- **Lint & Format**  
  - ESLint + (Prettier nếu thêm sau)
- **Chế độ Light && Dark**  
  - Người dùng có thể để chế dộ sáng và tối tùy theo sở thích
---

## 🛠️ Tech Stack

| Thư viện / Công cụ          | Phiên bản      | Mục đích                             |
| --------------------------- | -------------- | ------------------------------------ |
| React                       | ^19.1.0        | UI library                           |
| TypeScript                  | ~5.8.3         | Static typing                        |
| Vite                        | ^6.3.5         | Bundler & dev server                 |
| Tailwind CSS                | ^4.1.7         | Utility-first CSS framework          |
| Material UI                 | ^7.1.0         | React UI components                  |
| Redux Toolkit               | ^2.8.2         | State management                     |
| @dnd-kit (core, sortable)   | ^6.3.1 / ^10.0.0 | Drag & drop support               |
| Recharts                    | ^2.15.3        | Charting library                     |
| ESLint                      | ^9.25.0        | Linting                              |
| PostCSS / Autoprefixer      | ^8.5.3 / ^10.4.21 | CSS processing                   |
| vite-plugin-react           | ^4.4.1         | React fast refresh & support         |

---

## 🎯 Yêu cầu hệ thống

- **Node.js** ≥ 18.x  
- **npm** (mặc định kèm Node.js) hoặc **Yarn** 
- **Git**

---

## 📥 Cài đặt nhanh

```bash
# 1. Clone repo về máy
git clone https://github.com/AnhDuong2312/Test-intern
cd my-todo-app

# 2. Cài đặt dependencies
npm install
# hoặc
yarn install

