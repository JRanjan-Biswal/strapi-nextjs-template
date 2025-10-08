# Strapi Next.js Template

A modern, full-stack template combining **Next.js 15** with **Strapi CMS** for building dynamic, content-driven applications. This template provides a seamless integration between a headless CMS backend and a React frontend with TypeScript support.

## 🚀 Features

- **Next.js 15** with App Router and Turbopack
- **Strapi CMS** integration with deep populate plugin
- **TypeScript** support throughout the project
- **Tailwind CSS** for styling
- **Dynamic page routing** with `[[...slug]]` pattern
- **Block-based content system** for flexible page building
- **API utilities** for seamless Strapi integration
- **Responsive design** with mobile-first approach

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- npm, yarn, pnpm, or bun
- Git

## 🛠️ Setup Instructions

### Step 1: Get the Template

Use our CLI tool to quickly set up the Next.js + Strapi template:

```bash
npx get-next-template
```

After running the command, select "Next.js + Strapi template" from the interactive CLI menu. This will automatically set up the frontend with all necessary dependencies and configurations.

### Step 2: Set Up Strapi Backend

Create a new Strapi project:

```bash
npx create-strapi-app@latest
```

Follow the prompts to set up your Strapi project. Choose your preferred database (SQLite for development, PostgreSQL/MySQL for production).

### Step 3: Install Deep Populate Plugin

The deep populate plugin allows you to populate nested fields in your API responses, making it easier to retrieve related data in a single request.

```bash
npm install https://github.com/JRanjan-Biswal/strapi-deepopulate.git --foreground-scripts
```

### Step 4: Configure Strapi Package.json

Add the following script to your Strapi project's `package.json`:

```json
{
  "scripts": {
    "deepopulate": "strapi-deepopulate"
  }
}
```

### Step 5: Start Development Servers

Start both servers:

```bash
# Terminal 1: Start Strapi backend
cd your-strapi-project
npm run dev

# Terminal 2: Start Next.js frontend
cd strapi-nextjs-template
npm run dev
```

## 🌐 Access Points

- **Frontend**: [http://localhost:3000](http://localhost:3000)
- **Strapi Admin**: [http://localhost:1337/admin](http://localhost:1337/admin)
- **Setup Page**: [http://localhost:3000/setup](http://localhost:3000/setup)

## 📁 Project Structure

```
strapi-nextjs-template/
├── app/                          # Next.js App Router
│   ├── [[...slug]]/             # Dynamic routing for pages
│   ├── setup/                   # Setup instructions page
│   ├── layout.tsx               # Root layout
│   └── globals.css              # Global styles
├── components/                   # React components
│   ├── Blocks/                  # Dynamic content blocks
│   │   ├── HeroSection.tsx
│   │   ├── Info.tsx
│   │   └── SimpleHeroSection.tsx
│   ├── Footer/                  # Footer component
│   ├── Header/                  # Header components
│   └── Layout/                  # Layout components
│       ├── BlockGenerator.tsx   # Dynamic block renderer
│       ├── Layout.jsx
│       └── StrapiImageVideo.tsx
├── data_fetcher/                # Data fetching utilities
│   └── fetcher.ts
├── hooks/                       # Custom React hooks
├── utils/                       # Utility functions
│   ├── fetch-api.ts            # API fetch wrapper
│   ├── get-backend-url.ts      # Backend URL configuration
│   └── query.ts                # Query string builder
└── public/                     # Static assets
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
BASE_URL=http://localhost:1337
```

### Backend URL Configuration

The application uses `getBackendUrl()` utility to determine the Strapi backend URL. It defaults to `http://localhost:1337` but can be overridden with the `BASE_URL` environment variable.

## 🧩 Dynamic Content System

This template uses a block-based content system that allows you to create flexible pages in Strapi:

1. **Block Components**: Located in `components/Blocks/`
2. **Block Generator**: Automatically renders blocks based on Strapi content
3. **Dynamic Routing**: Pages are generated based on Strapi page slugs

### Creating New Blocks

1. Create a new component in `components/Blocks/`
2. Follow the naming convention: `ComponentName.tsx`
3. The component will be automatically available in Strapi

## 📡 API Integration

The template includes utilities for seamless Strapi integration:

- **`fetchAPI`**: Generic API fetch wrapper with authentication support
- **`getPageData`**: Fetches page data from Strapi
- **`pageQuery`**: Builds query strings for Strapi API calls

## 🎨 Styling

This project uses **Tailwind CSS** for styling. The setup includes:

- Tailwind CSS v4
- PostCSS configuration
- Custom CSS modules for specific components

## 🚀 Deployment

### Frontend (Next.js)

Deploy to Vercel, Netlify, or any platform supporting Next.js:

```bash
npm run build
npm run start
```

### Backend (Strapi)

Deploy Strapi to platforms like:
- Railway
- Heroku
- DigitalOcean
- AWS/GCP/Azure

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Strapi Documentation](https://docs.strapi.io)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## ⚠️ Important Post-Setup Note

**Once your Strapi is up and running and you have added the BASE_URL in the environment variables of the frontend, then remove the redirect logic in the dynamic [[...slug]] pages.**

This redirect logic is only meant for initial setup and should be removed once everything is properly configured to prevent unnecessary redirects in production.

## 🆘 Troubleshooting

### Common Issues

1. **CORS Errors**: Ensure your Strapi backend allows requests from `http://localhost:3000`
2. **API Connection**: Verify that `BASE_URL` is correctly set
3. **Deep Populate**: Make sure the plugin is properly installed and configured
4. **Redirect Logic**: Remember to remove the redirect logic from `[[...slug]]` pages after setup

### Getting Help

- Check the [setup page](http://localhost:3000/setup) for detailed instructions
- Review the Strapi and Next.js documentation
- Open an issue in the repository

---

**Happy coding!** 🎉