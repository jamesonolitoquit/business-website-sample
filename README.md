# FastNet Solutions - Portfolio Sample by Jameson A. Olitoquit

A modern, professional business website demo built with Next.js, TypeScript, Tailwind CSS, and Firebase Auth. This is a portfolio sample showcasing modern web development skills with login functionality, service plans, and responsive design.

> **Portfolio Sample** - Created by Jameson A. Olitoquit for demonstration purposes. This website showcases modern web development techniques and is not a real business offering.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15, TypeScript, Tailwind CSS
- **Authentication**: Firebase Auth with Google/Email login
- **Responsive Design**: Mobile-first approach
- **Service Plans**: Interactive pricing cards
- **Contact Form**: Functional contact form
- **Serverless**: No backend server required
- **Animations**: CSS transitions (Framer Motion temporarily removed due to compatibility)

## 🛠️ Tech Stack

- **Frontend**: Next.js 15 (App Router), React 19, TypeScript
- **Styling**: Tailwind CSS
- **Authentication**: Firebase Auth
- **Database**: Firebase Firestore
- **Deployment**: Vercel (recommended)
- **Animations**: CSS transitions (Framer Motion temporarily removed)

## 📋 Prerequisites

- Node.js 18+
- npm or yarn
- Firebase account

## 🚀 Quick Start

1. **Clone and install dependencies:**
   ```bash
   git clone <repository-url>
   cd business-website-sample
   npm install
   ```

2. **Set up Firebase:**
   - Create a Firebase project at [firebase.google.com](https://firebase.google.com)
   - Enable Authentication (Google and Email/Password providers)
   - Enable Firestore Database
   - Copy your config values to `.env.local`

3. **Configure environment variables:**
   ```bash
   cp .env.local.example .env.local
   # Edit .env.local with your Firebase config
   ```

4. **Run development server:**
   ```bash
   npm run dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000)**

## 🔧 Firebase Setup

1. **Create Firebase Project:**
   - Go to [Firebase Console](https://console.firebase.google.com)
   - Create a new project

2. **Enable Authentication:**
   - Go to Authentication > Sign-in method
   - Enable Google and Email/Password providers

3. **Enable Firestore:**
   - Go to Firestore Database
   - Create database in production mode

4. **Get Config Values:**
   - Go to Project Settings > General
   - Scroll to "Your apps" section
   - Copy the config object values to `.env.local`

## 📦 Build & Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect to Vercel
3. Deploy automatically
4. Add environment variables in Vercel dashboard

### Manual Build
```bash
npm run build
npm start
```

## 🎨 Customization

### Colors
Update theme colors in `tailwind.config.js`:
```js
colors: {
  primary: '#1e40af',  // Blue
  secondary: '#64748b', // Gray
}
```

### Content
- Service plans: Edit `src/components/Services.tsx`
- Company info: Edit `src/components/About.tsx`
- Contact details: Edit `src/components/Contact.tsx`

### Animations
Currently using CSS transitions for smooth interactions. To re-implement Framer Motion animations:

1. Install compatible version:
   ```bash
   npm install framer-motion@^11.0.0
   ```

2. Add motion components back to components:
   - Hero: Add fade-in and slide-up animations
   - Services: Add staggered card animations
   - About: Add slide-in animations
   - Contact: Add form animations

3. Ensure animations respect `prefers-reduced-motion` media query.

**Note**: Framer Motion was temporarily removed due to React 19 compatibility issues. Test thoroughly before re-implementing.

## � Current Status

✅ **Completed Features:**
- Next.js 15 project structure with TypeScript
- Responsive design with Tailwind CSS
- All core components (Header, Hero, Services, About, Contact, Footer)
- Firebase integration (client-side only for SSR compatibility)
- Contact form with state management
- Service plans display
- Authentication UI components (temporarily disabled)

⚠️ **Known Issues:**
- Framer Motion animations removed due to React 19 compatibility
- Firebase authentication temporarily disabled for build stability
- Animations replaced with CSS transitions

🔄 **Next Steps:**
- Re-implement animations with compatible Framer Motion version
- Enable Firebase authentication
- Add proper error handling and loading states
- Test and deploy to Vercel

## 🔒 Security

- Firebase Auth handles all authentication securely
- Environment variables protect sensitive config
- No sensitive data stored in client-side code

## 🚀 Performance

- Next.js automatic optimizations
- Tailwind CSS purging unused styles
- Firebase lazy loading
- CSS transitions for smooth interactions

## 📄 License

Demo project for portfolio purposes.

## 🤝 Contributing

This is a demo project. For production use, consider:
- Re-implementing Framer Motion animations with React 19 compatible version
- Enabling Firebase authentication with proper error handling
- Adding loading states and user feedback
- Implementing proper form validation
- Setting up CI/CD pipelines
- Adding unit tests
- Adding error boundaries

---

Built with ❤️ using Next.js, Firebase, and modern web technologies.