# Mini E-Commerce Frontend

A modern, production-ready e-commerce frontend built with React, TypeScript, and TailwindCSS.

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **TailwindCSS** - Styling
- **shadcn/ui** - UI components
- **Axios** - HTTP client
- **Context API** - State management
- **React Router** - Routing
- **Lucide React** - Icons

## Features

✅ Product listing with grid layout
✅ Shopping cart functionality
✅ Add/Remove/Update cart items
✅ Real-time cart count badge
✅ Responsive design
✅ Loading skeletons
✅ Error handling
✅ Toast notifications
✅ Beautiful UI with shadcn components

## Prerequisites

- Node.js 18+ 
- npm or yarn
- Backend running on http://localhost:5000

## Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Start development server:**
```bash
npm run dev
```

The app will run on `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── api/                 # API configuration and functions
│   ├── axios.ts        # Axios instance with interceptors
│   └── api.ts          # API service functions
├── components/         # Reusable components
│   ├── ui/            # shadcn UI components
│   ├── Navbar.tsx
│   ├── ProductCard.tsx
│   ├── CartItemCard.tsx
│   ├── EmptyCart.tsx
│   └── ProductSkeleton.tsx
├── context/           # React Context
│   └── CartContext.tsx
├── hooks/             # Custom hooks
│   ├── use-products.ts
│   └── use-toast.ts
├── lib/               # Utilities
│   └── utils.ts
├── pages/             # Page components
│   ├── ProductsPage.tsx
│   └── CartPage.tsx
├── types/             # TypeScript types
│   └── index.ts
├── App.tsx            # Main app component
├── main.tsx           # Entry point
└── index.css          # Global styles
```

## API Endpoints Used

- `GET /products` - Fetch all products
- `GET /products/:id` - Fetch single product
- `GET /cart` - Fetch cart items
- `POST /cart` - Add item to cart
- `PATCH /cart/:id` - Update cart item quantity
- `DELETE /cart/:id` - Remove item from cart

## Environment Variables

Update the API base URL in `src/api/axios.ts` if your backend runs on a different port:

```typescript
baseURL: 'http://localhost:5000'
```

## Features Breakdown

### Products Page
- Grid layout with responsive columns
- Product cards with images, name, price
- Add to Cart functionality
- Loading skeletons
- Error handling

### Cart Page
- List of cart items
- Quantity increment/decrement
- Remove item button
- Order summary with total
- Empty cart state
- Sticky summary sidebar

### Navigation
- Navbar with logo and links
- Cart icon with item count badge
- Sticky header

### State Management
- CartContext for global cart state
- Custom hooks for data fetching
- TypeScript for type safety

## Styling

- TailwindCSS for utility-first styling
- shadcn/ui for pre-built components
- Custom color scheme via CSS variables
- Responsive breakpoints
- Smooth transitions and hover effects

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Production Build

```bash
npm run build
```

Output will be in the `dist/` folder.

## License

MIT
