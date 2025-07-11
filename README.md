# E-commerce Dashboard

Modern, çok sayfalı bir e-ticaret yönetim paneli. Next.js 15, React, TailwindCSS ve Webpack ile geliştirilmiştir. Gerçek zamanlı istatistikler, ürün, sipariş, müşteri, admin, kupon, kategori, marka, işlem ve kullanıcı yönetimi gibi temel modülleri içerir. Tüm sayfalar dark mode uyumludur.

## Özellikler
- **Dashboard:** Canlı istatistikler, sistem durumu, özet kartlar
- **Ürün Yönetimi:** Ürün listeleme, filtreleme, ekleme
- **Sipariş Yönetimi:** Sipariş listesi, durumlar
- **Müşteri Yönetimi:** Müşteri listesi, detaylar
- **Admin Yönetimi:** Admin kullanıcıları ve izinler
- **Kupon Yönetimi:** Kupon oluşturma ve listeleme
- **Kategori & Marka Yönetimi:** Kategori ve marka listeleri
- **İşlem Geçmişi:** Finansal işlemler, loglar
- **Kullanıcı Yönetimi:** Kullanıcı rolleri ve durumları
- **Dark Mode:** Tüm sayfalarda tema desteği
- **Sahte Veri:** Demo için mock JSON ve faker.js ile üretilmiş veriler

## Kullanılan Teknolojiler
- Next.js 15
- React 18
- TailwindCSS
- Webpack
- Faker.js (mock veri için)

## Kurulum ve Çalıştırma

```bash
npm install
npm run dev
```

Tarayıcıda [http://localhost:3000](http://localhost:3000) adresini açın.

## Modüller
- `/dashboard` : Genel özet ve istatistikler
- `/products` : Ürün listesi ve filtreleme
- `/addproduct` : Yeni ürün ekleme
- `/orders` : Siparişler
- `/customers` : Müşteriler
- `/admin` : Admin kullanıcıları
- `/coupons` : Kuponlar
- `/categories` : Kategoriler
- `/brands` : Markalar
- `/transactions` : Finansal işlemler
- `/users` : Kullanıcılar
- `/logpage` : Sistem logları

## Notlar
- Proje demo amaçlıdır, veriler mock olarak tutulur.
- Tüm sayfalar responsive ve dark mode uyumludur.
- Geliştirme için önerilen Node.js sürümü: 18+

---

Aşağıdaki kısımlar Next.js'in orijinal README'sinden alınmıştır:

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
