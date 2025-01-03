# Next.js + Tailwind CSS + TypeScript Starter Template

A modern, feature-rich starter template built with Next.js, Tailwind CSS, TypeScript, and shadcn/ui. Perfect for building scalable web applications with best practices and developer experience in mind.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

## 🚀 Features

- ⚡️ **Next.js 14** with App Router and Server Components
- 💎 **Tailwind CSS** for utility-first styling
- 🔍 **TypeScript** for type safety
- 🎨 **shadcn/ui** for beautiful, accessible components
- 🧪 **Jest** and **React Testing Library** for testing
- 📝 **ESLint** and **Prettier** for code quality
- 📱 Fully responsive design
- 🌙 Dark mode support
- 🔧 Absolute imports
- 📄 SEO optimization ready
- 🚦 Pre-configured with best practices

## 📦 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn or pnpm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/AndreChips/next-tailwind-starter.git
cd next-tailwind-starter
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🏗 Project Structure

```
.
├── __tests__/          # Test files
├── public/            # Static files
├── app/          # App router pages
├── components/   # React components
│   ├── ui/      # shadcn/ui components
│   └── ...      # Custom components
├── lib/         # Utility functions
├── .eslintrc.json  # ESLint configuration
├── .prettierrc     # Prettier configuration
├── jest.config.js  # Jest configuration
└── tailwind.config.js # Tailwind configuration
```

## 🧪 Testing

Run tests with:

```bash
npm run test
# or
yarn test
```

## 🎨 Customization

### Tailwind CSS

Customize your theme in `tailwind.config.js`:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        // Add your colors
      },
    },
  },
}
```

### shadcn/ui Components

Add new components using the CLI:

```bash
npx shadcn-ui@latest add [component-name]
```

## 📝 Scripts

- `dev` - Start development server
- `build` - Build for production
- `start` - Start production server
- `test` - Run tests
- `lint` - Run ESLint
- `format` - Format code with Prettier

## 🚀 Deployment

This template is ready to be deployed to Vercel. Click the button below to deploy:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/next-tailwind-starter)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [shadcn/ui](https://ui.shadcn.com/)
