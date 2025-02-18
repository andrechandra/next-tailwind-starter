# Next.js + Tailwind CSS + TypeScript Starter Template

A modern, feature-rich starter template built with Next.js, Tailwind CSS, TypeScript, and shadcn/ui. Perfect for building scalable web applications with best practices and developer experience in mind.

## 🚀 Features

- ⚡️ **Next.js 14** with App Router and Server Components
- 💎 **Tailwind CSS** for utility-first styling
- 🔍 **TypeScript** for type safety
- 🎨 **shadcn/ui** for beautiful, accessible components
- 🧪 **Jest** and **React Testing Library** for testing
- 📝 **ESLint** and **Prettier** for code quality
- 🐶 **Husky** for Git hooks
- 🚫 **lint-staged** for pre-commit code quality checks
- 📱 Fully responsive design
- 🌙 Dark mode support
- 🔧 Absolute imports
- 📄 SEO optimization ready
- 🚦 Pre-configured with best practices

## 📦 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/andrechandra/next-tailwind-starter.git
cd next-tailwind-starter
```

2. Install dependencies:

```bash
pnpm install
```

3. Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🏗 Project Structure

```
.
├── .husky/         # Git hooks
├── app/          # App router pages
├── components/   # React components
│   ├── ui/      # shadcn/ui components
│   └── ...      # Custom components
├── lib/         # Utility functions
├── public/            # Static files
├── .eslintrc.json  # ESLint configuration
├── .prettierrc     # Prettier configuration
├── jest.config.js  # Jest configuration
└── tailwind.config.ts # Tailwind configuration
```

## 📝 Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm test` - Run tests
- `pnpm lint` - Run ESLint
- `pnpm format` - Format code with Prettier

## 🔄 Git Hooks

This template uses Husky and lint-staged to ensure code quality before commits:

- Pre-commit: Runs ESLint and Prettier on staged files
- Pre-push: Runs tests and type checking

To skip hooks temporarily, use the `--no-verify` flag:

```bash
git commit -m "Your message" --no-verify
```

## 🚀 Deployment

This template is ready to be deployed to Vercel. Click the button below to deploy:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/andrechandra/next-tailwind-starter)

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
- [Husky](https://typicode.github.io/husky/)
- [lint-staged](https://github.com/okonet/lint-staged)
