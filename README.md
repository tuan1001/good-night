# 🌙 Chúc bé ngủ ngon

Một landing page lãng mạn, dễ thương để gửi lời chúc ngủ ngon cho người yêu.
Chủ đề ban đêm ấm áp với mặt trăng, ngôi sao lấp lánh, mây trôi và trái tim bay nhẹ nhàng.

Built with **Next.js 14 (App Router) · React · TypeScript · Tailwind CSS** — không backend, không database, deploy miễn phí trên Vercel.

---

## ✨ Tính năng

- Giao diện glassmorphism, gradient tím than → xanh đêm → hồng nhẹ
- Mặt trăng phát sáng, 70 ngôi sao lấp lánh, mây trôi, trái tim bay
- Nút CTA "Nhấn để nhận lời chúc" → hiện lời nhắn bí mật
- Responsive đẹp trên điện thoại
- Tôn trọng `prefers-reduced-motion` (tự giảm animation nếu người dùng cài đặt)

---

## 🚀 Chạy trên máy (local)

```bash
npm install
npm run dev
```

Mở trình duyệt tại **http://localhost:3000**

---

## 💌 Chỉnh sửa nội dung

Toàn bộ chữ nằm trong **một file duy nhất**: [`app/content.ts`](app/content.ts)

```ts
export const content = {
  title: "Chúc bé ngủ ngon",
  subtitle: "Mong em có một giấc mơ thật đẹp, nơi có anh luôn bên cạnh em.",
  buttonLabel: "Nhấn để nhận lời chúc",
  secretMessage: "Anh yêu em nhiều lắm. Ngủ ngon nhé, công chúa của anh.",
  footer: "Made with love for you",
};
```

Chỉ cần đổi chữ trong dấu ngoặc kép, lưu lại là xong.

---

## ☁️ Deploy miễn phí lên Vercel

**Cách 1 — qua GitHub (khuyên dùng):**

1. Đẩy code lên một repo GitHub.
2. Vào [vercel.com](https://vercel.com) → đăng nhập bằng GitHub.
3. Bấm **Add New… → Project** → chọn repo này → **Import**.
4. Vercel tự nhận diện Next.js, giữ nguyên mọi thiết lập → bấm **Deploy**.
5. Sau ~1 phút bạn nhận được link công khai (vd: `https://good-night.vercel.app`) để gửi cho người yêu. 💖

**Cách 2 — qua CLI:**

```bash
npm i -g vercel
vercel
```

Làm theo hướng dẫn trên màn hình, sau đó `vercel --prod` để lên bản chính thức.

---

## 🗂️ Cấu trúc thư mục

```
Good-night/
├── app/
│   ├── content.ts        # ← Nội dung lời chúc (chỉnh ở đây)
│   ├── globals.css       # Gradient nền + reduced-motion
│   ├── layout.tsx        # Metadata, font Quicksand + Dancing Script
│   └── page.tsx          # Trang chính
├── components/
│   ├── NightSky.tsx      # Mặt trăng, sao, mây
│   ├── FloatingHearts.tsx# Trái tim bay
│   └── GreetingCard.tsx  # Card glassmorphism + nút CTA
├── tailwind.config.ts    # Màu & animation tuỳ chỉnh
└── ...
```

---

Made with love for you 💖
