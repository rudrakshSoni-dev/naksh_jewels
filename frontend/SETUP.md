# SETUP INSTRUCTIONS

## Quick Start

### 1. Navigate to project directory
```bash
cd ecommerce-frontend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Ensure backend is running
Make sure your backend server is running on `http://localhost:5000`

### 4. Start development server
```bash
npm run dev
```

### 5. Open browser
Navigate to `http://localhost:5173`

---

## Complete File Structure

```
ecommerce-frontend/
├── node_modules/           # Dependencies (after npm install)
├── public/                 # Static assets
├── src/
│   ├── api/
│   │   ├── axios.ts       # Axios instance config
│   │   └── api.ts         # API service functions
│   ├── components/
│   │   ├── ui/            # shadcn components
│   │   │   ├── alert.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   ├── separator.tsx
│   │   │   ├── skeleton.tsx
│   │   │   ├── toast.tsx
│   │   │   └── toaster.tsx
│   │   ├── CartItemCard.tsx
│   │   ├── EmptyCart.tsx
│   │   ├── Navbar.tsx
│   │   ├── ProductCard.tsx
│   │   └── ProductSkeleton.tsx
│   ├── context/
│   │   └── CartContext.tsx
│   ├── hooks/
│   │   ├── use-products.ts
│   │   └── use-toast.ts
│   ├── lib/
│   │   └── utils.ts       # cn() utility
│   ├── pages/
│   │   ├── CartPage.tsx
│   │   └── ProductsPage.tsx
│   ├── types/
│   │   └── index.ts       # TypeScript interfaces
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   └── vite-env.d.ts
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md
```

---

## Troubleshooting

### Port already in use
If port 5173 is busy:
```bash
npm run dev -- --port 3000
```

### Backend connection issues
- Verify backend is running on port 5000
- Check CORS is enabled on backend
- Update `baseURL` in `src/api/axios.ts` if needed

### Module not found errors
```bash
rm -rf node_modules package-lock.json
npm install
```

---

## Development Tips

### Hot Module Replacement
Vite provides instant HMR - changes appear immediately

### TypeScript
All components are fully typed - VSCode will show errors

### Styling
- Use Tailwind utility classes
- shadcn components are pre-styled
- Customize in `tailwind.config.js`

### State Management
- Cart state is in Context API
- No Redux needed
- Check `src/context/CartContext.tsx`

---

## Production Deployment

### Build
```bash
npm run build
```

### Preview build locally
```bash
npm run preview
```

### Deploy
Upload `dist/` folder to your hosting service:
- Vercel
- Netlify
- AWS S3 + CloudFront
- Any static host

---

## Key Features Implemented

✅ **Products Page**
  - Grid layout (responsive)
  - Product cards with images
  - Add to cart button
  - Loading skeletons
  - Error states

✅ **Cart Page**
  - Cart items list
  - Quantity controls (+/-)
  - Remove item
  - Order summary
  - Empty cart state
  - Total price calculation

✅ **Navigation**
  - Navbar with logo
  - Cart badge with count
  - Active link styling

✅ **State Management**
  - CartContext (Context API)
  - Custom hooks
  - TypeScript types

✅ **UI Components**
  - shadcn/ui library
  - Toast notifications
  - Skeleton loaders
  - Responsive cards
  - Modern design

---

## API Integration

All API calls use Axios with:
- Base URL configuration
- Request/response interceptors
- Error handling
- TypeScript types

See `src/api/` for implementation.

---

## Need Help?

Check:
1. README.md - General info
2. This file (SETUP.md) - Setup guide
3. Component files - Inline comments
4. TypeScript types - `src/types/index.ts`

Happy coding! 🚀
