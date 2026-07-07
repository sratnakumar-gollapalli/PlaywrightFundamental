# Playwright Fundamental

This project is a simple Playwright test setup using the Playwright Test framework.

## Features

- Basic browser automation examples
- Tests for the Playwright website
- Cross-browser configuration for Chromium, Firefox, and WebKit

## Prerequisites

Make sure you have the following installed:

- Node.js
- npm

## Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Install Playwright browsers:

```bash
npx playwright install
```

## Running Tests

Run all tests:

```bash
npx playwright test
```

Run a specific test file:

```bash
npx playwright test tests/example.spec.ts
```

Show the HTML report after a test run:

```bash
npx playwright show-report
```

## Project Structure

- `package.json` - Project dependencies and scripts
- `playwright.config.ts` - Playwright configuration
- `tests/` - Test files
