# Cài địa chỉ DIP

Công cụ miễn phí giúp anh em kỹ thuật báo cháy cài địa chỉ bằng công tắc DIP ngay tại công trình.

Gõ số địa chỉ, công cụ hiện đúng vị trí gạt từng công tắc. Hoặc bấm gạt trên hình để biết công tắc đang ở địa chỉ bao nhiêu.

## Thiết bị hỗ trợ

| Hãng | Thiết bị | Dải địa chỉ | Quy tắc |
|---|---|---|---|
| Horing | Module QA17-B, QA17-K; đầu báo QA01, QA05, QA06; nút nhấn QA19, QA0817 | 1 – 250 | Công tắc 1 = 1, 2 = 2, 3 = 4, 4 = 8, 5 = 16, 6 = 32, 7 = 64, 8 = 128. Gạt ON là tính. |
| Simplex | Card địa chỉ tủ 4100ES | 1 – 119 | SW1 luôn ON. SW2 đến SW8 gạt OFF mới tính: SW8 = 1, SW7 = 2, SW6 = 4, SW5 = 8, SW4 = 16, SW3 = 32, SW2 = 64. |

Quy tắc lấy theo tài liệu hãng: Horing mục 8 "Addressable Point Number Setting" trang 27–28; Simplex 4100ES Phụ lục A, Bảng A-1.

## Cách cài vào điện thoại

**Android, cài thẳng, không cần mạng:** tải file [Dia-chi-DIP.apk](https://github.com/DanAI2026/cai-dia-chi-dip/releases/latest/download/Dia-chi-DIP.apk), bấm mở file, cho phép "Cài ứng dụng không rõ nguồn gốc" khi máy hỏi. File nhỏ, gửi qua Zalo được.

**Hoặc dùng trang web:** mở trang công cụ bằng điện thoại (đường link ở mục "About" của kho này).

- **Android:** mở bằng Chrome, bấm dấu ba chấm góc phải, chọn "Cài đặt ứng dụng" hoặc "Thêm vào màn hình chính".
- **iPhone:** mở bằng Safari, bấm nút Chia sẻ, chọn "Thêm vào MH chính".

Sau lần mở đầu tiên, công cụ dùng được cả khi không có mạng.

## Không cài được file APK

File đã được kiểm tra cài và chạy tốt trên Android 14. Nếu máy không cho cài, thường do cài đặt chặn của điện thoại:

| Máy báo | Cách xử lý |
|---|---|
| "Điện thoại không được phép cài ứng dụng không rõ nguồn gốc từ nguồn này" | Bấm **Cài đặt**, bật **Cho phép từ nguồn này**, bấm quay lại rồi bấm **Cài đặt**. |
| Samsung báo bị **Trình chặn tự động** (Auto Blocker) chặn | Vào **Cài đặt > Bảo mật và quyền riêng tư > Trình chặn tự động**, tắt tạm. Cài xong bật lại. |
| **Play Protect** báo "Ứng dụng chưa được kiểm tra" hoặc "Đã chặn" | Bấm **Thông tin chi tiết** hoặc **Chi tiết khác**, chọn **Vẫn cài đặt**. |
| "Ứng dụng chưa được cài đặt" hoặc "Xung đột với gói hiện có" | Gỡ bản "Địa chỉ DIP" cũ (nếu có) rồi cài lại. |
| Bấm file trong Zalo mà không có gì xảy ra | Trong Zalo bấm giữ file, chọn **Lưu về máy**. Mở ứng dụng **Tệp** hoặc **File của bạn**, vào **Tải xuống**, bấm vào file. |

Nếu vẫn không được, dùng trang web: mở link bằng Chrome, chọn "Thêm vào màn hình chính". Cách này cũng dùng được khi không có mạng.

## Lưu ý

Luôn đối chiếu với nhãn trên thiết bị và chương trình tủ trước khi lắp. Công cụ chỉ hỗ trợ tra cứu, không thay cho tài liệu của hãng.

---

Công ty TNHH Công Nghệ UTC chia sẻ cho cộng đồng.
