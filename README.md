# Alex Tkachev Portfolio

A modern, minimalist portfolio website inspired by Alex Tkachev's design, built with Next.js 14, React, TypeScript, and Framer Motion.

## 🎨 Design Features

- **Clean, minimal design** matching the original alextkachev.com aesthetic
- **Smooth animations** powered by Framer Motion
- **Responsive layout** optimized for all devices
- **Interactive navigation** with full-screen menu overlay
- **Real-time clock** showing GMT+6 (Almaty, KZ) timezone
- **Micro-interactions** on hover states and button clicks
- **Professional typography** using Geist Sans font

## 🚀 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Font**: Geist Sans
- **Icons**: Lucide React & Radix UI Icons

## 📦 Components

### Core Components
- **Navigation**: Fixed header with menu toggle, real-time clock, and status
- **Hero**: Main introduction section with animated text
- **LatestProject**: Showcases recent work with interactive hover effects
- **SocialLinks**: Photo gallery and social media connections

### Features
- **Animated menu overlay** with smooth transitions
- **Hover animations** on project cards and social links
- **Staggered loading animations** for content sections
- **Interactive buttons** with scale and color transitions

## 🎯 Key Animations

1. **Page Load**: Staggered fade-in animations for content sections
2. **Menu Toggle**: Smooth slide-down overlay with easing
3. **Project Hover**: Scale and translate effects on project cards
4. **Social Links**: Subtle slide animations on hover
5. **Buttons**: Scale and color transition effects

## 🛠️ Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd alex-tkachev-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- **Desktop**: Full layout with side-by-side content
- **Tablet**: Adapted layout with proper spacing
- **Mobile**: Stacked layout with mobile-first approach

## 🎨 Customization

### Colors
The design uses a minimal color palette:
- **Primary**: Black (#000000)
- **Secondary**: Gray variants
- **Accent**: Green for status indicator

### Typography
- **Primary Font**: Geist Sans
- **Weight Range**: Light (300) to Medium (500)
- **Responsive Sizes**: 4xl to 7xl for headings

### Animations
All animations use:
- **Duration**: 0.3s - 0.8s
- **Easing**: `easeOut` for natural motion
- **Delays**: Staggered for sequential loading

## 📁 Project Structure

```
/
├── app/
│   ├── globals.css          # Global styles and Tailwind
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Homepage component
├── components/
│   ├── Navigation.tsx       # Header navigation with menu
│   ├── Hero.tsx            # Main hero section
│   ├── LatestProject.tsx   # Project showcase
│   └── SocialLinks.tsx     # Social links and photos
└── public/                 # Static assets
```

## 🔧 Development

### Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Key Dependencies
- `next` - React framework
- `react` - UI library
- `framer-motion` - Animation library
- `tailwindcss` - CSS framework
- `typescript` - Type safety

## 📄 License

This project is inspired by Alex Tkachev's original design and is created for educational/demonstration purposes.

## 🙏 Acknowledgments

- Original design inspiration: [alextkachev.com](https://alextkachev.com/)
- Fonts: Geist by Vercel
- Icons: Lucide React & Radix UI
