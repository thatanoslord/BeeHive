# Beehive - Premium Artisanal Honey E-Commerce Store

A modern, responsive e-commerce website for selling premium honey products. Built with React, TypeScript, and Tailwind CSS, featuring a beautiful dark theme with warm orange accents that reflect the natural essence of honey.

![Beehive Store](https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&fit=crop)

## ✨ Features

- **🛒 Full E-Commerce Experience** - Complete shopping cart with quantity controls and order summary
- **📱 Responsive Design** - Optimized for all devices from mobile to desktop
- **🎨 Beautiful UI/UX** - Modern dark theme with smooth animations and micro-interactions
- **⚡ Fast Performance** - Built with Vite for lightning-fast development and builds
- **🔍 SEO Optimized** - Proper meta tags and semantic HTML structure
- **♿ Accessible** - WCAG compliant with proper focus states and keyboard navigation

## 🚀 Live Demo

Experience the live website: [View Demo](#) *(Add your deployment URL here)*

## 📸 Screenshots

### Homepage
Beautiful hero section with call-to-action and product showcase

### Shopping Cart
Full-featured cart with quantity controls and order calculations

### Product Gallery
Elegant product grid with hover effects and detailed information

## 🛠️ Technologies Used

### Frontend Framework
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development for better code quality
- **React Router DOM** - Client-side routing for seamless navigation

### Styling & Design
- **Tailwind CSS** - Utility-first CSS framework for rapid styling
- **CSS Custom Properties** - Consistent design system with CSS variables
- **Responsive Design** - Mobile-first approach with breakpoints
- **Custom Animations** - Smooth transitions and hover effects

### Build Tools & Development
- **Vite** - Next-generation frontend build tool
- **ESLint** - Code linting for consistent code style
- **PostCSS** - CSS processing with Autoprefixer

### Icons & Assets
- **Lucide React** - Beautiful, customizable SVG icons
- **Google Fonts** - Inter font family for modern typography
- **Optimized Images** - Compressed images for fast loading

## 🎨 Design System

The project follows a cohesive design system inspired by the warmth and natural beauty of honey:

```css
:root {
  /* Brand Colors */
  --main-color: #ff9f0d;      /* Honey Orange - Primary accent */
  --text-color: #fff;         /* Pure White - Main text */
  --first-color: #212121;     /* Charcoal - Cards and sections */
  --second-color: #9e9e9e;    /* Light Gray - Secondary text */
  --background-color: #1A141A; /* Deep Purple - Main background */
  
  /* Typography Scale */
  --big-font: 4.5rem;         /* Hero headings */
  --h2-font: 2.6rem;          /* Section titles */
  --p-font: 1.1rem;           /* Body text */
}
```

### Design Principles
- **Contrast**: High contrast ratios for excellent readability
- **Hierarchy**: Clear visual hierarchy using typography and spacing
- **Consistency**: 8px spacing system throughout the interface
- **Accessibility**: WCAG AA compliant color combinations

## 📁 Project Structure

```
beehive-honey-store/
├── public/
│   ├── images/              # Product images and assets
│   │   ├── logo.png        # Brand logo
│   │   ├── c1.png          # Wildflower honey
│   │   ├── c2.png          # Manuka honey
│   │   ├── c3.png          # Organic comb honey
│   │   └── about.png       # About section image
│   └── index.html          # HTML template
├── src/
│   ├── components/         # Reusable React components
│   │   └── Cart.tsx       # Shopping cart component
│   ├── App.tsx            # Main application component
│   ├── main.tsx           # Application entry point
│   ├── index.css          # Global styles and variables
│   └── vite-env.d.ts      # TypeScript definitions
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── vite.config.ts         # Vite build configuration
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** (version 16.0 or higher)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd beehive-honey-store
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173` to view the application

### Available Scripts

```bash
npm run dev      # Start development server with hot reload
npm run build    # Build optimized production bundle
npm run preview  # Preview production build locally
npm run lint     # Run ESLint for code quality checks
```

## 🌟 Key Components

### Homepage (`App.tsx`)
- **Hero Section**: Compelling headline with call-to-action
- **Product Showcase**: Grid layout featuring honey varieties
- **About Section**: Brand story and company values
- **Customer Reviews**: Social proof with star ratings
- **Contact Form**: Customer inquiry functionality

### Shopping Cart (`Cart.tsx`)
- **Item Management**: Add, remove, and update quantities
- **Price Calculation**: Automatic subtotal, tax, and shipping
- **Responsive Layout**: Optimized for all screen sizes
- **Order Summary**: Clear breakdown of costs

### Navigation System
- **Smooth Scrolling**: Seamless section navigation
- **Mobile Menu**: Collapsible navigation for mobile devices
- **Cart Integration**: Easy access to shopping cart

## 📱 Responsive Breakpoints

The design adapts beautifully across all devices:

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px and above

## 🎯 Performance Optimizations

- **Code Splitting**: Automatic code splitting with Vite
- **Image Optimization**: Compressed images for faster loading
- **CSS Optimization**: Purged unused CSS in production
- **Bundle Analysis**: Optimized bundle size for quick loading

## 🔧 Development Tools

### AI Assistance
- **ChatGPT**: Used for code optimization and problem-solving
- **DeepSeek**: Assisted with complex logic implementation

### Design Resources
- **Figma**: UI/UX design and prototyping
- **Pexels**: High-quality stock photography for products and branding

### Code Quality
- **TypeScript**: Static type checking for robust code
- **ESLint**: Consistent code formatting and best practices
- **Prettier**: Automatic code formatting

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

The optimized build will be created in the `dist/` directory, ready for deployment to any static hosting service like:

- **Netlify**
- **Vercel**
- **GitHub Pages**
- **AWS S3**

### Environment Variables
Create a `.env` file for any environment-specific configurations:

```env
VITE_API_URL=your_api_endpoint
VITE_STRIPE_PUBLIC_KEY=your_stripe_key
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **React Team** for the amazing framework
- **Tailwind CSS** for the utility-first approach
- **Lucide** for the beautiful icon set
- **Vite** for the lightning-fast build tool
- **Pexels** for the stunning photography
- **ChatGPT & DeepSeek** for development assistance
- **Figma** for design and prototyping tools

## 📞 Contact

For questions or support, please reach out:

- **Email**: hello@beehivehoney.com
- **Website**: [beehivehoney.com](#)
- **GitHub**: [Your GitHub Profile](#)

---

**Made with 🍯 and ❤️ by the Beehive Team**

*Bringing you the finest artisanal honey, one jar at a time.*