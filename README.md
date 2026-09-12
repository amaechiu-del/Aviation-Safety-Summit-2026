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

### Production deployment flow

This repository now deploys from GitHub Actions to **Google Cloud Run**.

- **Workflow:** `.github/workflows/deploy.yml`
- **Trigger:** every push or merge to `main`
- **Manual trigger:** **Actions** → **Deploy to Cloud Run** → **Run workflow**
- **Hosting target:** Google Cloud Run

Cloud Run is used because this project is not a static-only site: the production app serves the Vite build and also exposes Express API routes such as `/api/paystack/*`, `/api/gemini/*`, and `/api/stakeholders`.

### What the workflow does

On each deployment to `main`, GitHub Actions will:

1. Check out the repository
2. Install dependencies with `npm ci`
3. Run `npm run typecheck`
4. Run `npm run build`
5. Authenticate to Google Cloud
6. Validate the required Secret Manager secrets
7. Deploy the application source to Cloud Run using the repository `Dockerfile`

### Required GitHub secrets

Configure these repository secrets before the workflow can deploy successfully:

| Secret | Required | Purpose |
| --- | --- | --- |
| `GCP_PROJECT_ID` | Yes | Google Cloud project ID |
| `GCP_REGION` | Yes | Cloud Run region, for example `us-central1` |
| `CLOUD_RUN_SERVICE` | Yes | Existing or new Cloud Run service name |
| `GCP_SA_KEY` | Yes | Service account JSON with permission to deploy to Cloud Run and use Cloud Build |

### Required Google Secret Manager secrets

Create these secrets in the same Google Cloud project that receives the deployment:

| Secret name | Required | Purpose |
| --- | --- | --- |
| `GEMINI_API_KEY` | Yes | Server-side Gemini API access |
| `PAYSTACK_SECRET_KEY` | Yes | Server-side Paystack access |

### Suggested Google Cloud IAM access

The service account stored in `GCP_SA_KEY` should be able to:

- deploy Cloud Run services
- run Cloud Build builds from source
- write service configuration updates
- access Secret Manager secret metadata and attach secrets to Cloud Run revisions

Typical roles are:

- `Cloud Run Admin`
- `Cloud Build Editor`
- `Service Account User`
- `Secret Manager Secret Accessor`

### Application environment

The deployment workflow sets these runtime values on Cloud Run:

- `NODE_ENV=production`
- `GEMINI_API_KEY` (from Secret Manager)
- `PAYSTACK_SECRET_KEY` (from Secret Manager)

Local development can still use `.env.example` as the template for `.env.local`. The file also includes `APP_URL` and `PAYSTACK_PUBLIC_KEY` for non-Cloud-Run environments, but the current production deployment flow does not require them because the server does not read them at runtime.

### Notes and limitations

- The server now reads `PORT` from the environment, which is required by Cloud Run.
- Configure public or private Cloud Run access in Google Cloud according to your environment requirements; the workflow does not override that setting.
- Application data is stored in `data/db.json`. On Cloud Run, that filesystem is ephemeral, so data written at runtime will not persist across instance restarts or replacements. If permanent storage is required, move this data to a managed database or object store.
- If you need a release outside of the normal `main` branch flow, use the manual workflow dispatch in the Actions tab.

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
