# Contributing to Aviation Safety Summit 2026

Thank you for your interest in contributing! This document provides guidelines and instructions for contributing to the project.

## Code of Conduct

We are committed to providing a welcoming and inclusive environment for all contributors. Please be respectful and professional in all interactions.

## Getting Started

### Prerequisites

- Node.js 16+ (18+ recommended)
- npm or yarn
- Git

### Local Development Setup

1. **Fork the repository**
   ```bash
   # Visit https://github.com/amaechiu-del/Aviation-Safety-Summit-2026
   # Click "Fork"
   ```

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/Aviation-Safety-Summit-2026.git
   cd Aviation-Safety-Summit-2026
   ```

3. **Add upstream remote**
   ```bash
   git remote add upstream https://github.com/amaechiu-del/Aviation-Safety-Summit-2026.git
   ```

4. **Install dependencies**
   ```bash
   npm install
   ```

5. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

6. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

## Development Workflow

### Running the Project

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run type checking
npm run lint

# Clean build artifacts
npm run clean
```

### Code Style

- **TypeScript:** Strict mode enabled
- **Formatting:** Use Prettier (configured in project)
- **Linting:** ESLint with React/TypeScript rules
- **Naming:** 
  - Components: PascalCase (e.g., `EventCard.tsx`)
  - Functions/variables: camelCase (e.g., `handleSubmit`)
  - Constants: UPPER_SNAKE_CASE (e.g., `MAX_RETRIES`)

### Commit Messages

Follow Conventional Commits format:

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation
- `style:` Formatting
- `refactor:` Code refactoring
- `perf:` Performance improvement
- `test:` Adding/updating tests
- `chore:` Build/tooling changes
- `ci:` CI/CD changes

**Examples:**
```
feat(auth): add OAuth login support

fix(ui): correct button alignment on mobile

docs: update deployment instructions

chore(deps): bump typescript to 5.3
```

## Making Changes

### File Structure

```
src/
  ├── components/     # React components
  ├── hooks/         # Custom React hooks
  ├── pages/         # Page components
  ├── services/      # API and utility services
  ├── types/         # TypeScript type definitions
  ├── utils/         # Helper functions
  └── App.tsx        # Main app component
public/              # Static assets
data/               # Data files
```

### Creating a Feature

1. **Create a feature branch**
   ```bash
   git checkout -b feature/descriptive-name
   ```

2. **Make your changes**
   - Keep commits atomic and focused
   - Write descriptive commit messages
   - Add/update tests

3. **Test your changes**
   ```bash
   npm run lint
   npm run build
   ```

4. **Keep branch up to date**
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

## Submitting a Pull Request

### Before Submitting

- [ ] Fork and clone the repository
- [ ] Create a feature branch
- [ ] Make focused changes
- [ ] Test locally
- [ ] Update documentation
- [ ] Commit with clear messages

### Creating the PR

1. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

2. **Open a Pull Request**
   - Use the PR template
   - Provide clear description
   - Link related issues
   - Add screenshots if applicable

3. **Respond to reviews**
   - Address feedback promptly
   - Ask questions if clarification needed
   - Re-request review when done

### PR Requirements

All PRs must:
- Pass automated checks (linting, type-checking, build)
- Include relevant tests
- Update documentation
- Follow code style guidelines
- Have a descriptive title and description

## Testing

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run specific test file
npm test -- ComponentName.test.ts
```

### Writing Tests

```typescript
// Example test structure
describe('Component', () => {
  it('should render correctly', () => {
    // Test implementation
  });

  it('should handle user interaction', () => {
    // Test implementation
  });
});
```

## Documentation

- Update README.md for significant changes
- Add JSDoc comments for exported functions
- Include inline comments for complex logic
- Update CHANGELOG for new features

## Reporting Issues

### Bug Reports

Include:
- Detailed description
- Steps to reproduce
- Expected behavior
- Actual behavior
- Environment (OS, browser, Node version)
- Screenshots/logs if applicable

### Feature Requests

Include:
- Clear description of feature
- Use cases/benefits
- Proposed implementation (optional)
- Related issues

## Questions?

- Check existing issues and discussions
- Ask in GitHub Discussions
- Contact maintainers

---

**Thank you for contributing to Aviation Safety Summit 2026! 🎉**
