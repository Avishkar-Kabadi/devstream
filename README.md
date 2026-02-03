# 🚀 DevFlow CLI

DevFlow is a developer environment orchestration tool that makes setting up, checking, and managing development environments fast and painless. It works with Node.js, React, Next.js, Python, and more suitable for individuals and teams.

---

## ⚡ Features

- **Project stack detection** — `devflow detect` automatically detects common stacks (Node.js, React, Next.js, Express, NestJS, Python, etc.).
- **Environment checks** — `devflow check` runs sanity checks for Node, package managers (npm/yarn/pnpm), Python, and optional services like Postgres; reports missing tools or version mismatches.
- **One-command setup** — `devflow setup` installs dependencies, generates environment files from templates (e.g. `.env`).
- **Interactive experience** — Uses `chalk` and `inquirer` for friendly prompts and colored output.
- **Cross-platform** — Works on Windows, macOS, and Linux.

---

## 📦 Installation

Install globally via npm:

```bash
npm install -g devflow
```

Verify the CLI is available:

```bash
devflow --help
```

---

## 📝 Usage

- Detect project stack

```bash
devflow detect
```

- Run environment checks

```bash
devflow check
```

- Setup project (install deps + generate env)

```bash
devflow setup
```

- Show help

```bash
devflow help
```

---

## 💡 Tips
- Always run **DevFlow commands in the root directory** of your project (where `package.json` or `requirements.txt` exists).  
- Always run `devflow check` before `devflow setup` to avoid surprises.
- Use a `.env.template.json` (or similar template) in your repo to let `devflow` generate environment files.

---

## 📖 Example Workflow

1. Detect project type

```bash
devflow detect
```

2. Run environment sanity checks

```bash
devflow check
```

3. Setup project

```bash
devflow setup
```

---

## 🛠 Tech Stack

- Node.js
- Commander.js (CLI framework)
- Chalk (colored logs)
- Inquirer (interactive prompts)

---

## 📂 Contributing

Thanks for considering contributing! A common workflow:

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "feat: describe your change"
```

4. Push and open a Pull Request

```bash
git push origin feature-name
```

Please include a clear description and tests where appropriate.

---

## 📄 License

MIT © Your Name

---

## ✅ Notes

- Replace `Your Name` and contact details with your information.
- Add your GitHub repo URL and the package registry link in `package.json` and this README.

---

If you'd like, I can add a "Screenshots & Workflow GIF" section and an example `package.json` snippet. Want me to add that next?
# 🚀 DevFlow CLI

DevFlow is a developer environment orchestration tool that makes setting up, checking, and managing development environments fast and painless. It works with Node.js, React, Next.js, Python, and more — suitable for individuals and teams.

---

## ⚡ Features

- **Project stack detection** — `devflow detect` automatically detects common stacks (Node.js, React, Next.js, Express, NestJS, Python, etc.).
- **Environment checks** — `devflow check` runs sanity checks for Node, package managers (npm/yarn/pnpm), Python, and optional services like Postgres; reports missing tools or version mismatches.
- **One-command setup** — `devflow setup` installs dependencies, generates environment files from templates (e.g. `.env.local`), and can run DB migrations.
- **Interactive experience** — Uses `chalk` and `inquirer` for friendly prompts and colored output.
- **Cross-platform** — Works on Windows, macOS, and Linux.

---

## 📦 Installation

Install globally via npm:

```bash
npm install -g devflow
```

Verify the CLI is available:

```bash
devflow --help
```

---

## 📝 Usage

- Detect project stack

```bash
devflow detect
```

- Run environment checks

```bash
devflow check
```

- Setup project (install deps + generate env)

```bash
devflow setup
```

- Show help

```bash
devflow help
```

---

## 💡 Tips

- Always run `devflow check` before `devflow setup` to avoid surprises.
- Use a `.env.template.json` (or similar template) in your repo to let `devflow` generate environment files.

---

## 📖 Example Workflow

1. Detect project type

```bash
devflow detect
```

2. Run environment sanity checks

```bash
devflow check
```

3. Setup project

```bash
devflow setup
```

---

## 🛠 Tech Stack

- Node.js
- Commander.js (CLI framework)
- Chalk (colored logs)
- Inquirer (interactive prompts)

---

## 📂 Contributing

Thanks for considering contributing! A common workflow:

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "feat: describe your change"
```

4. Push and open a Pull Request

```bash
git push origin feature-name
```

Please include a clear description and tests where appropriate.

---

## 📄 License

MIT © Your Name

---

## ✅ Notes

- Replace `Your Name` and contact details with your information.
- Add your GitHub repo URL and the package registry link in `package.json` and this README.

---

If you'd like, I can add a "Screenshots & Workflow GIF" section and an example `package.json` snippet. Want me to add that next?
# 🚀 DevFlow CLI

DevFlow is a **Developer Environment Orchestration Tool** that makes setting up, checking, and managing development environments fast and painless.  
Works for **Node.js, React, Next.js, Python, and more**. Perfect for individual developers and teams.

---

## ⚡ Features
# 🚀 DevFlow CLI

DevFlow is a developer environment orchestration tool that makes setting up, checking, and managing development environments fast and painless. It works with Node.js, React, Next.js, Python, and more — suitable for individuals and teams.

---

## ⚡ Features

- **Project stack detection** — `devflow detect` automatically detects common stacks (Node.js, React, Next.js, Express, NestJS, Python, etc.).
- **Environment checks** — `devflow check` runs sanity checks for Node, package managers (npm/yarn/pnpm), Python, and optional services like Postgres; reports missing tools or version mismatches.
- **One-command setup** — `devflow setup` installs dependencies, generates environment files from templates (e.g. `.env.local`), and can run DB migrations.
- **Interactive experience** — Uses `chalk` and `inquirer` for friendly prompts and colored output.
- **Cross-platform** — Works on Windows, macOS, and Linux.

---

## 📦 Installation

Install globally via npm:

```bash
npm install -g devflow
```

Verify the CLI is available:

```bash
devflow --help
```

---

## 📝 Usage

- Detect project stack

```bash
devflow detect
```

- Run environment checks

```bash
devflow check
```

- Setup project (install deps + generate env)

```bash
devflow setup
```

- Show help

```bash
devflow help
```

---

## 💡 Tips

- Always run `devflow check` before `devflow setup` to avoid surprises.
- Use a `.env.template.json` (or similar template) in your repo to let `devflow` generate environment files.

---

## 📖 Example Workflow

1. Detect project type

```bash
devflow detect
```

2. Run environment sanity checks

```bash
devflow check
```

3. Setup project

```bash
devflow setup
```

---

## 🛠 Tech Stack

- Node.js
- Commander.js (CLI framework)
- Chalk (colored logs)
- Inquirer (interactive prompts)

---

## 📂 Contributing

Thanks for considering contributing! A common workflow:

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "feat: describe your change"
```

4. Push and open a Pull Request

```bash
git push origin feature-name
```

Please include a clear description and tests where appropriate.

---

## 📄 License

MIT © Your Name




