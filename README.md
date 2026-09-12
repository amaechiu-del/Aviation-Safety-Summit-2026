# Aviation Safety Summit 2026

Welcome to the official repository for the Aviation Safety Summit 2026 website.

## Overview

This repository contains the source code for the Aviation Safety Summit 2026 website, a TypeScript-based project dedicated to promoting aviation safety and bringing together industry experts and stakeholders.

## Features

- Modern, responsive website design
- Event information and scheduling
- Speaker profiles and bios
- Registration and ticketing information
- Resources and documentation
- Contact and venue information

## Technology Stack

- **Language:** TypeScript
- **Repository:** Public GitHub repository
- **License:** Open to contribution

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn package manager
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/amaechiu-del/Aviation-Safety-Summit-2026.git
cd Aviation-Safety-Summit-2026
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## Deployment

### Deploying from GitHub

We support multiple deployment options:

#### Option 1: GitHub Pages
1. Go to **Settings** → **Pages**
2. Select the branch to deploy from (typically `main`)
3. Choose the deployment folder (usually `/root` or `/docs`)
4. Save and your site will be published automatically

#### Option 2: GitHub Actions
Automated deployment workflows can be set up in `.github/workflows/` to:
- Build the project on push
- Run tests
- Deploy to your hosting provider
- Update live environment

Create a workflow file `.github/workflows/deploy.yml`:
```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      # Add your deployment steps here
```

#### Option 3: Cloudflare Pages

Cloudflare Pages provides a fast, secure, and scalable platform for hosting your website directly from GitHub.

##### Setup Instructions:

1. **Create a Cloudflare Account**
   - Sign up at [cloudflare.com](https://www.cloudflare.com)
   - Add your domain to Cloudflare (or use a Cloudflare subdomain)

2. **Connect to GitHub**
   - In Cloudflare Dashboard, go to **Pages**
   - Click **Create a project** → **Connect to Git**
   - Authorize Cloudflare to access your GitHub repositories
   - Select `amaechiu-del/Aviation-Safety-Summit-2026`

3. **Configure Build Settings**
   - **Framework preset:** Select your framework (e.g., React, Next.js, or None)
   - **Build command:** `npm run build`
   - **Build output directory:** `dist` or `out` (depending on your setup)
   - **Environment variables:** Add any required environment variables

4. **Deploy**
   - Click **Save and Deploy**
   - Cloudflare will automatically build and deploy your site
   - Your site will be available at `yourproject.pages.dev`

##### Automatic Deployments:
- Every push to `main` triggers automatic deployment
- Pull requests get preview deployments
- Easy rollback to previous versions

##### Cloudflare Features:
- **Global CDN:** Lightning-fast content delivery worldwide
- **Security:** Built-in DDoS protection and WAF
- **Performance:** Automatic image optimization and caching
- **Analytics:** Real-time traffic insights
- **Custom Domain:** Connect your own domain
- **Environment Management:** Production and preview environments
- **Rollback:** Easy version rollback with one click

##### Cloudflare Configuration File (Optional)

Create a `wrangler.toml` file for advanced configuration:
```toml
name = "aviation-safety-summit-2026"
type = "javascript"
account_id = "your-account-id"
workers_dev = true
route = ""
zone_id = ""

[env.production]
route = "yourdomain.com/*"
zone_id = "your-zone-id"
```

#### Option 4: Third-Party Hosting
- **Vercel:** Connect your GitHub repository and auto-deploy on commits
- **Netlify:** Push directly from GitHub with branch previews
- **AWS/Azure/Google Cloud:** Use GitHub Actions to deploy to your cloud provider

### Building for Production

```bash
npm run build
```

This will generate an optimized production build ready for deployment.

## Project Structure

```
Aviation-Safety-Summit-2026/
├── src/              # Source code
├── public/           # Static assets
├── package.json      # Project dependencies
├── tsconfig.json     # TypeScript configuration
└── README.md         # This file
```

## Contributing

We welcome contributions to improve the Aviation Safety Summit 2026 website. Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Issues & Support

If you encounter any issues or have questions, please:
- Check existing [Issues](https://github.com/amaechiu-del/Aviation-Safety-Summit-2026/issues)
- Create a new issue with detailed information
- Contact the maintainers

## License

This project is open source and available under an appropriate open-source license. See the LICENSE file for details (if applicable).

## Contact

For questions about the Aviation Safety Summit 2026, please reach out to the event organizers through the official website or GitHub issues.

---

**Last Updated:** September 2026
