# E-commerce Dashboard

A modern, multi-page e-commerce admin panel built with Next.js 15, React, TailwindCSS, and Webpack. It features real-time statistics, product, order, customer, admin, coupon, category, brand, transaction, and user management modules. All pages are fully dark mode compatible.

## Features
- **Dashboard:** Live statistics, system status, summary cards
- **Product Management:** Product listing, filtering, and adding
- **Order Management:** Order list and statuses
- **Customer Management:** Customer list and details
- **Admin Management:** Admin users and permissions
- **Coupon Management:** Create and list coupons
- **Category & Brand Management:** Category and brand lists
- **Transaction History:** Financial transactions, logs
- **User Management:** User roles and statuses
- **Dark Mode:** Theme support on all pages
- **Mock Data:** Demo data with mock JSON and faker.js

## Tech Stack
- Next.js 15
- React 18
- TailwindCSS
- Webpack
- Faker.js (for mock data)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Modules
- `/dashboard` : Overview and statistics
- `/products` : Product list and filtering
- `/addproduct` : Add new product
- `/orders` : Orders
- `/customers` : Customers
- `/admin` : Admin users
- `/coupons` : Coupons
- `/categories` : Categories
- `/brands` : Brands
- `/transactions` : Financial transactions
- `/users` : Users
- `/logpage` : System logs

## Screenshots

<!-- Screenshots of the E-commerce Dashboard -->

### Dashboard Overview
![Dashboard](https://raw.githubusercontent.com/Berkayozgun/ecommerce-dashboard/master/public/dashboard-overview.png)
*Main dashboard with live statistics and system status*

### Product Management
![Products](https://raw.githubusercontent.com/Berkayozgun/ecommerce-dashboard/master/public/products-page.png)
*Product listing with advanced filtering and search capabilities*

### Order Management
![Orders](https://raw.githubusercontent.com/Berkayozgun/ecommerce-dashboard/master/public/orders-page.png)
*Order tracking and management interface*

### Customer Management
![Customers](https://raw.githubusercontent.com/Berkayozgun/ecommerce-dashboard/master/public/customers-page.png)
*Customer database with detailed information*

### Admin Panel
![Admin](https://raw.githubusercontent.com/Berkayozgun/ecommerce-dashboard/master/public/admin-panel.png)
*Admin user management with permissions*

### Dark Mode Support
![Dark Mode](https://raw.githubusercontent.com/Berkayozgun/ecommerce-dashboard/master/public/dark-mode-example.png)
*Full dark mode compatibility across all pages*

### Add Product Form
![Add Product](https://raw.githubusercontent.com/Berkayozgun/ecommerce-dashboard/master/public/add-product-form.png)
*Product creation form with validation*

### Coupons Management
![Coupons](https://raw.githubusercontent.com/Berkayozgun/ecommerce-dashboard/master/public/coupons-page.png)
*Coupon management and configuration*

### Categories & Brands
![Categories](https://raw.githubusercontent.com/Berkayozgun/ecommerce-dashboard/master/public/categories-page.png)
*Category and brand management interface*

### Transactions History
![Transactions](https://raw.githubusercontent.com/Berkayozgun/ecommerce-dashboard/master/public/transactions-page.png)
*Financial transaction tracking and logs*

## Notes
- This project is for demo purposes; all data is mock.
- All pages are responsive and support dark mode.
- Recommended Node.js version: 18+

---

The following sections are from the original Next.js README:

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
