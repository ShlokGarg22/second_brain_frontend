# Second Brain Frontend

A modern React-based frontend application for building a digital second brain - a personal knowledge management system that helps you capture, organize, and connect your thoughts and information.

## 🚀 Features

- **Modern React Stack**: Built with React 19 and TypeScript for type safety
- **Beautiful UI Components**: Custom-designed UI components with Tailwind CSS
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Fast Development**: Powered by Vite for lightning-fast hot module replacement
- **Code Quality**: ESLint configuration for consistent code style
- **Icon System**: Custom SVG icon components for a cohesive design

## 🛠️ Tech Stack

- **Framework**: React 19.1.0
- **Language**: TypeScript 5.8.3
- **Build Tool**: Vite 7.0.3
- **Styling**: Tailwind CSS 3.4.17
- **Linting**: ESLint 9.30.1
- **Package Manager**: npm/yarn

## 📦 Project Structure

```
secondbrainf/
├── public/                 # Static assets
├── src/
│   ├── components/
│   │   └── ui/            # Reusable UI components
│   │       └── Button.tsx # Custom button component
│   ├── icons/             # Custom icon components
│   │   ├── index.ts       # Icon exports
│   │   └── plusicon.tsx   # Plus icon component
│   ├── assets/            # Images and other assets
│   ├── App.tsx            # Main application component
│   ├── main.tsx           # Application entry point
│   └── index.css          # Global styles
├── package.json           # Dependencies and scripts
├── vite.config.ts         # Vite configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── eslint.config.js       # ESLint configuration
```

## 🚦 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd frontendofsecondbrain
   ```

2. **Navigate to the project directory**
   ```bash
   cd secondbrainf
   ```

3. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173` to see the application running.

## 📝 Available Scripts

In the project directory, you can run:

- **`npm run dev`** - Starts the development server with hot reload
- **`npm run build`** - Builds the app for production
- **`npm run lint`** - Runs ESLint to check for code quality issues
- **`npm run preview`** - Serves the production build locally for testing

## 🎨 UI Components

### Button Component

The project includes a flexible button component with multiple variants:

- **Primary**: Purple background with white text
- **Secondary**: Light purple background with purple text
- **Tertiary**: Gray background with dark text

**Sizes available**: `sm`, `md`, `lg`

**Features**:
- Start and end icon support
- Click handlers
- Hover effects
- Responsive design

### Icons

Custom SVG icon system with:
- Plus icon for add actions
- Modular icon exports
- Consistent styling

## 🔧 Configuration

### Tailwind CSS
The project uses Tailwind CSS for styling. Configuration can be found in `tailwind.config.js`.

### TypeScript
TypeScript configuration is split across multiple files:
- `tsconfig.json` - Base configuration
- `tsconfig.app.json` - App-specific settings
- `tsconfig.node.json` - Node.js specific settings

### ESLint
Code quality is maintained through ESLint with React-specific rules configured in `eslint.config.js`.

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Development Guidelines

- Follow TypeScript best practices
- Use the existing component patterns
- Maintain consistent code style with ESLint
- Write meaningful commit messages
- Test your changes before submitting

## 🐛 Known Issues

- Button component has a typo in `Vairants` type (should be `Variants`)
- Button component has unused example usage at the bottom

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

If you have any questions or need help with the project, please open an issue in the GitHub repository.

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
