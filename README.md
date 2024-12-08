ระบบจัดการการจอง (Booking Management System)
ระบบจัดการการจองอย่างง่ายที่สร้างด้วยReact, Node.js, Express, และ MySQL เพื่อช่วยในการเพิ่ม ดู แก้ไข และลบข้อมูลการจอง

คุณสมบัติ
เพิ่ม ดู แก้ไข และลบข้อมูลการจอง
รองรับ RESTful API
เชื่อมต่อฐานข้อมูล MySQL
ใช้ CORS สำหรับการสื่อสารระหว่าง Frontend และ Backend
ความต้องการเบื้องต้น
ก่อนเริ่มต้น โปรดตรวจสอบว่าคุณได้ติดตั้งสิ่งต่อไปนี้:

Node.js (แนะนำ v16 หรือใหม่กว่า)
MySQL
วิธีติดตั้ง
คัดลอกโปรเจกต์นี้:

bash
Copy code
git clone <repository-url>
cd booking-management
ติดตั้งแพ็กเกจที่จำเป็น:

bash
Copy code
npm install
ตั้งค่าฐานข้อมูล:

สร้างฐานข้อมูลชื่อ booking_management ใน MySQL
ใช้คำสั่ง SQL ด้านล่างเพื่อสร้างตาราง bookings:
sql
Copy code
CREATE TABLE bookings (
  id INT AUTO_INCREMENT PRIMARY KEY,
  customer_name VARCHAR(255) NOT NULL,
  booking_date DATE NOT NULL,
  status ENUM('pending', 'confirmed', 'cancelled') NOT NULL
);
แก้ไขข้อมูลการเชื่อมต่อฐานข้อมูลในไฟล์ server.js:

javascript
Copy code
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'chonthicha270147',
  dataase:'booking_management',
});
วิธีใช้งาน
การเริ่มต้นเซิร์ฟเวอร์ Backend
รันเซิร์ฟเวอร์โดยใช้ Node.js:

bash
Copy code
node server.js
หรือใช้ Nodemon เพื่อให้เซิร์ฟเวอร์รีสตาร์ทอัตโนมัติขณะพัฒนา:

bash
Copy code
nodemon server.js
เซิร์ฟเวอร์จะทำงานที่ http://localhost:5001

API Endpoints
Method	Endpoint	คำอธิบาย
GET	/bookings	ดึงข้อมูลการจองทั้งหมด
POST	/bookings	เพิ่มข้อมูลการจองใหม่
PUT	/bookings/:id	อัปเดตข้อมูลการจองที่มีอยู่
DELETE	/bookings/:id	ลบข้อมูลการจองโดยใช้ ID
ตัวอย่างคำขอ (POST /bookings):
json
Copy code
{
  "customer_name": "John Doe",
  "booking_date": "2024-12-10",
  "status": "confirmed"
}
การแก้ไขปัญหา
MySQL shutdown unexpectedly: ตรวจสอบให้แน่ใจว่า MySQL Service ทำงานอยู่
เชื่อมต่อฐานข้อมูลไม่ได้: ตรวจสอบข้อมูลการเชื่อมต่อ และตรวจสอบว่า MySQL เปิดใช้งานอยู่
License
โปรเจกต์นี้ได้รับอนุญาตภายใต้ MIT License
