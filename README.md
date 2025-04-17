
```markdown
# 🧪 Task Board Test Project

Automated UI testing project using **Playwright** and **TypeScript** for a sample task board web application.

## 📌 Project Overview

This project demonstrates an end-to-end testing framework for a task board application. It is written in **TypeScript** and uses:

- 🎭 [Playwright](https://playwright.dev/) – fast and reliable end-to-end testing framework  
- 📊 [Allure Reports](https://docs.qameta.io/allure/) – for advanced visual test reporting  
- 🐙 GitHub Actions – CI pipeline that runs tests and generates reports automatically

---

## 🧰 Tech Stack

- Node.js (v20)  
- Playwright  
- Allure Playwright Reporter  
- GitHub Actions  

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/styro27/task-board-test-project.git
cd task-board-test-project
```

### 2. Install dependencies

```bash
npm ci
```

### 3. Install Playwright browsers

```bash
npx playwright install --with-deps
```

---

## 🧪 Running Tests Locally

Run all Playwright tests:

```bash
npx playwright test
```

Generate and open Allure report:

```bash
npx allure generate --clean allure-results -o allure-report
npx allure open allure-report
```
---

## ⚙️ CI/CD with GitHub Actions

Each push to `main` or `master` will:
- Install dependencies
- Run tests
- Generate Allure report
- Upload report as artifact

You can find the CI configuration at:  
`.github/workflows/playwright.yml`

---

## 📄 Project Structure

```bash
.
├── .github/workflows/       # CI pipeline config (GitHub Actions)
├── page-objects/            # Page Object Model classes
│   ├── loginPage.ts
│   ├── maindPage.ts
│   └── ...
├── tests/                   # Main test specs
│   ├── loginPageTests.spec.ts      
│   └── projectsPageTests.spec.ts
├── test-data/               # Static or dynamic test data
│   ├── taskAndTagsData.json
│   └── ... 
├── playwright.config.ts     # Playwright configuration
├── package.json             # Project metadata and scripts
├── allure-results/          # Raw results (auto-generated)
└

```