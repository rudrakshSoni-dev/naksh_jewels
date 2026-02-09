# 🛒 Mini E-Commerce Frontend

A modern, production-ready e-commerce frontend application built with React, TypeScript, and TailwindCSS. Features a clean UI, robust state management, and seamless integration with backend APIs.

![React](https://img.shields.io/badge/React-18.2-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-06B6D4)
![Vite](https://img.shields.io/badge/Vite-5.0-646CFF)

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Configuration](#-configuration)
- [Project Structure](#-project-structure)
- [Usage](#-usage)
- [API Integration](#-api-integration)
- [Components](#-components)
- [State Management](#-state-management)
- [Styling](#-styling)
- [Development](#-development)
- [Build & Deployment](#-build--deployment)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)
- [License](#-license)

---

## ✨ Features

### Core Functionality
- 🛍️ **Product Catalog** - Browse products with grid layout
- 🛒 **Shopping Cart** - Add, update, and remove items
- 📊 **Real-time Updates** - Instant cart synchronization
- 💰 **Price Calculation** - Automatic totals and subtotals
- 📱 **Responsive Design** - Mobile-first approach

### User Experience
- ⚡ **Fast Loading** - Skeleton screens and optimized rendering
- 🎨 **Modern UI** - Clean, professional design with shadcn/ui
- 🔔 **Toast Notifications** - User feedback for all actions
- ♿ **Accessibility** - ARIA labels and keyboard navigation
- 🌐 **Error Handling** - Graceful error states with retry options

### Technical Features
- 🔒 **Type Safety** - Full TypeScript coverage
- 🎯 **Context API** - Centralized state management
- 🔄 **Auto-refresh** - Cart synchronization across sessions
- 📦 **Component Library** - Reusable shadcn/ui components
- 🛡️ **Error Boundaries** - Crash-proof architecture

---

## 🛠️ Tech Stack

### Core
- **React 18.2** - UI library
- **TypeScript 5.3** - Type safety
- **Vite 5.0** - Build tool and dev server

### Styling
- **TailwindCSS 3.4** - Utility-first CSS framework
- **shadcn/ui** - Pre-built accessible components
- **Lucide React** - Icon library
- **CSS Variables** - Theme customization

### State & Data
- **Context API** - Global state management
- **Axios** - HTTP client
- **Custom Hooks** - Reusable logic

### UI Components
- **Radix UI** - Headless component primitives
- **Class Variance Authority** - Component variants
- **Tailwind Merge** - Conditional class merging

### Development
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

---

## 📦 Prerequisites

Before you begin, ensure you have:

- **Node.js** 18.0 or higher
- **npm** 9.0 or higher (or **yarn** 1.22+)
- **Backend API** running on `http://localhost:5000`

Check your versions:
```bash
node --version  # Should be v18.0.0 or higher
npm --version   # Should be 9.0.0 or higher
```

---

## 🚀 Installation

### 1. Clone or Extract the Project
```bash
cd ecommerce-frontend
```

### 2. Install Dependencies
```bash
npm install
```

This will install all required packages (~200MB).

### 3. Verify Installation
```bash
npm list react react-dom typescript
```

---

## ⚙️ Configuration

### Backend URL Configuration

The default backend URL is `http://localhost:5000`. To change it:

**Edit `src/api/axios.ts`:**
```typescript
const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000', // Change this to your backend URL
  // ...
});
```

### Environment Variables (Optional)

Create `.env` file in root:
```env
VITE_API_BASE_URL=http://localhost:5000
```

Then update `src/api/axios.ts`:
```typescript
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000',
  // ...
});
```

### Port Configuration

Default dev server port is `5173`. To change:

```bash
# Temporary (one time)
npm run dev -- --port 3000

# Permanent - Edit vite.config.ts
export default defineConfig({
  server: {
    port: 3000
  }
})
```

---

## 📁 Project Structure

```
ecommerce-frontend/
├── public/                      # Static assets
├── src/
│   ├── api/                     # API configuration
│   │   ├── axios.ts            # Axios instance
│   │   ├── api.ts              # API functions
│   │   └── debug.ts            # Debug utilities
│   │
│   ├── components/             # Reusable components
│   │   ├── ui/                 # shadcn UI components
│   │   │   ├── alert.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   ├── separator.tsx
│   │   │   ├── skeleton.tsx
│   │   │   ├── toast.tsx
│   │   │   └── toaster.tsx
│   │   │
│   │   ├── CartItemCard.tsx    # Cart item display
│   │   ├── DebugPanel.tsx      # Debug tools
│   │   ├── EmptyCart.tsx       # Empty state
│   │   ├── Navbar.tsx          # Navigation bar
│   │   ├── ProductCard.tsx     # Product display
│   │   └── ProductSkeleton.tsx # Loading state
│   │
│   ├── context/                # React Context
│   │   └── CartContext.tsx     # Cart state management
│   │
│   ├── hooks/                  # Custom hooks
│   │   ├── use-products.ts     # Products data hook
│   │   └── use-toast.ts        # Toast notifications
│   │
│   ├── lib/                    # Utilities
│   │   └── utils.ts            # Helper functions
│   │
│   ├── pages/                  # Page components
│   │   ├── CartPage.tsx        # Shopping cart page
│   │   └── ProductsPage.tsx    # Products listing page
│   │
│   ├── types/                  # TypeScript types
│   │   └── index.ts            # Type definitions
│   │
│   ├── App.tsx                 # Main app component
│   ├── main.tsx                # Entry point
│   ├── index.css               # Global styles
│   └── vite-env.d.ts           # Vite types
│
├── .eslintrc.cjs               # ESLint config
├── .gitignore                  # Git ignore rules
├── index.html                  # HTML template
├── package.json                # Dependencies
├── postcss.config.js           # PostCSS config
├── tailwind.config.js          # Tailwind config
├── tsconfig.json               # TypeScript config
├── tsconfig.node.json          # Node TypeScript config
├── vite.config.ts              # Vite config
└── README.md                   # This file
```

---

## 🎯 Usage

### Start Development Server
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |

---

## 🔌 API Integration

### Backend Requirements

Your backend must be running and return responses in this format:

#### GET /products
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Product Name",
      "price": 29.99,
      "image": "https://example.com/image.jpg",
      "description": "Product description"
    }
  ]
}
```

#### GET /cart
```json
{
  "success": true,
  "cart": [
    {
      "id": 1,
      "productId": 1,
      "quantity": 2,
      "product": {
        "id": 1,
        "name": "Product Name",
        "price": 29.99,
        "image": "https://example.com/image.jpg"
      }
    }
  ]
}
```

#### POST /cart
**Request Body:**
```json
{
  "productId": 1,
  "quantity": 2
}
```

**Response:**
```json
{
  "success": true,
  "cart": [
    // Full updated cart array
  ]
}
```

#### PATCH /cart/:id
**Request Body:**
```json
{
  "quantity": 3
}
```

**Response:**
```json
{
  "success": true,
  "cart": [
    // Full updated cart array
  ]
}
```

#### DELETE /cart/:id
**Response:**
```json
{
  "success": true,
  "message": "Item removed from cart"
}
```

### CORS Configuration

Your backend must enable CORS:

**Express.js:**
```javascript
const cors = require('cors');
app.use(cors());
```

**Flask:**
```python
from flask_cors import CORS
CORS(app)
```

**FastAPI:**
```python
from fastapi.middleware.cors import CORSMiddleware
app.add_middleware(CORSMiddleware, allow_origins=["*"])
```

---

## 🧩 Components

### Pages

#### ProductsPage
- Displays product grid
- Handles loading states
- Shows error messages
- Add to cart functionality

#### CartPage
- Shows cart items
- Quantity controls
- Remove items
- Order summary
- Empty cart state

### UI Components

#### ProductCard
```typescript
<ProductCard product={product} />
```
- Product image
- Name and description
- Price display
- Add to cart button

#### CartItemCard
```typescript
<CartItemCard item={cartItem} />
```
- Product details
- Quantity controls (+/-)
- Remove button
- Item total

#### Navbar
```typescript
<Navbar />
```
- Logo/branding
- Navigation links
- Cart badge with count

### shadcn/ui Components

Pre-built accessible components:
- `<Button />` - Various styles and sizes
- `<Card />` - Content containers
- `<Badge />` - Status indicators
- `<Alert />` - Error/info messages
- `<Skeleton />` - Loading placeholders
- `<Toast />` - Notifications

---

## 🎨 Styling

### TailwindCSS Utility Classes

The project uses Tailwind's utility-first approach:

```tsx
<div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md">
  <h3 className="text-lg font-semibold">Product Name</h3>
  <span className="text-2xl font-bold text-primary">$29.99</span>
</div>
```

### CSS Variables

Theme colors are defined in `src/index.css`:

```css
:root {
  --primary: 221.2 83.2% 53.3%;
  --secondary: 210 40% 96.1%;
  --destructive: 0 84.2% 60.2%;
  /* ... */
}
```

### Customization

**Change primary color:**

Edit `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: {
        DEFAULT: "hsl(221, 83%, 53%)", // Your custom color
      }
    }
  }
}
```

### Responsive Breakpoints

```javascript
sm: '640px',   // Mobile landscape
md: '768px',   // Tablet
lg: '1024px',  // Desktop
xl: '1280px',  // Large desktop
'2xl': '1400px' // Extra large
```

---

## 💻 Development

### Hot Module Replacement (HMR)

Vite provides instant HMR. Changes appear immediately without full page reload.

### TypeScript

All components are fully typed. VSCode will show type errors inline.

**Example type usage:**
```typescript
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  // TypeScript knows all Product properties
};
```

### Custom Hooks

#### useProducts
```typescript
const { products, loading, error, refetch } = useProducts();
```

#### useCart
```typescript
const {
  cart,
  addToCart,
  updateCartItem,
  removeFromCart,
  getTotalItems,
  getTotalPrice
} = useCart();
```

### Adding New Components

Using shadcn/ui CLI:
```bash
npx shadcn-ui@latest add [component-name]
```

Example:
```bash
npx shadcn-ui@latest add dialog
```

---

## 🏗️ Build & Deployment

### Production Build

```bash
npm run build
```

Output: `dist/` folder (~500KB gzipped)

### Preview Production Build

```bash
npm run preview
```

### Deployment Platforms

#### Vercel
```bash
npm i -g vercel
vercel
```

#### Netlify
```bash
npm run build
# Upload dist/ folder to Netlify
```

#### GitHub Pages
```bash
npm run build
# Configure GitHub Pages to serve from dist/
```

#### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 5173
CMD ["npm", "run", "preview"]
```

### Environment Variables

Set these on your hosting platform:
```
VITE_API_BASE_URL=https://your-api.com
```

---

## 🐛 Troubleshooting

### Common Issues

#### 1. Backend Connection Failed
**Error:** Network Error, Failed to fetch

**Solutions:**
- Verify backend is running on port 5000
- Check CORS is enabled
- Test: `curl http://localhost:5000/products`

#### 2. Products Not Showing
**Error:** Empty product list

**Causes:**
- Backend returning wrong format
- Backend not running
- Wrong API endpoint

**Debug:**
```bash
# Test backend
curl http://localhost:5000/products

# Should return: { "success": true, "data": [...] }
```

#### 3. Cart Prices Not Showing
**Cause:** Backend not populating product data

**Fix:** Backend must JOIN/populate product:
```javascript
// Sequelize
CartItem.findAll({ include: [Product] })

// Mongoose
CartItem.find().populate('product')
```

#### 4. Port Already in Use
**Error:** Port 5173 is already in use

**Solution:**
```bash
npm run dev -- --port 3000
```

#### 5. Module Not Found
**Error:** Cannot find module

**Solution:**
```bash
rm -rf node_modules package-lock.json
npm install
```

### Debug Mode

The app includes debug tools:

1. Check browser console (F12)
2. Look for API response logs
3. Use built-in DebugPanel (shown on errors)

### Getting Help

1. Check browser console for errors
2. Verify backend response format
3. Test API endpoints with curl/Postman
4. Check Network tab in DevTools

---

## 🧪 Testing

### Manual Testing Checklist

- [ ] Products page loads
- [ ] Products display correctly
- [ ] Can add items to cart
- [ ] Cart badge updates
- [ ] Cart page shows items
- [ ] Can increase quantity
- [ ] Can decrease quantity
- [ ] Can remove items
- [ ] Total price correct
- [ ] Empty cart shows message
- [ ] Loading states work
- [ ] Error states work
- [ ] Mobile responsive
- [ ] Images load properly

### Browser Testing

Test on:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

---

## 🎓 Learning Resources

### React
- [React Documentation](https://react.dev)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app)

### TypeScript
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

### TailwindCSS
- [Tailwind Documentation](https://tailwindcss.com/docs)
- [Tailwind UI Components](https://tailwindui.com)

### shadcn/ui
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Radix UI Primitives](https://www.radix-ui.com)

### Vite
- [Vite Guide](https://vitejs.dev/guide/)

---

## 📝 Best Practices

### Code Style
- Use TypeScript strictly (no `any`)
- Functional components only
- Custom hooks for reusable logic
- Proper error handling
- Loading states for async operations

### Performance
- Lazy load images
- Skeleton screens during loading
- Debounce API calls
- Memoize expensive calculations
- Code splitting for routes

### Accessibility
- Semantic HTML
- ARIA labels
- Keyboard navigation
- Color contrast ratios
- Screen reader support

---

## 🤝 Contributing

### Development Workflow

1. Create a feature branch
```bash
git checkout -b feature/my-feature
```

2. Make changes and test

3. Commit with meaningful messages
```bash
git commit -m "feat: add product search functionality"
```

4. Push and create PR
```bash
git push origin feature/my-feature
```

### Commit Convention

Use conventional commits:
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation
- `style:` Formatting
- `refactor:` Code refactoring
- `test:` Adding tests
- `chore:` Maintenance

---

## 📄 License

MIT License

Copyright (c) 2024

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---

## 📞 Support

For issues and questions:

1. Check the [Troubleshooting](#-troubleshooting) section
2. Review browser console errors
3. Test backend endpoints
4. Check network tab in DevTools

---

## 🎉 Acknowledgments

- **React Team** - For the amazing framework
- **Vercel** - For Vite and Next.js
- **shadcn** - For the beautiful component library
- **Tailwind Labs** - For TailwindCSS
- **Radix UI** - For accessible primitives

---

## 📊 Project Stats

- **Components:** 13+
- **Pages:** 2
- **Custom Hooks:** 2
- **API Functions:** 6
- **Type Definitions:** 5+
- **Lines of Code:** ~2000+

---

**Built with ❤️ using React, TypeScript, and modern web technologies**

**Happy Coding! 🚀**
