# 🚀 devstream CLI

devstream is a developer environment orchestration tool that makes setting up, checking, and managing development environments fast and painless. It works with Node.js, React, Next.js, Python, and more suitable for individuals and teams.

---

## ⚡ Features

- **Project stack detection** — `npx devstream detect` automatically detects common stacks (Node.js, React, Next.js, Express, NestJS, Python, etc.).
- **Environment checks** — `npx devstream check` runs sanity checks for Node, package managers (npm/yarn/pnpm), Python, and optional services like Postgres; reports missing tools or version mismatches.
- **One-command setup** — `npx devstream setup` installs dependencies, generates environment files from templates (e.g. `.env`).
- **Interactive experience** — Uses `chalk` and `inquirer` for friendly prompts and colored output.
- **Cross-platform** — Works on Windows, macOS, and Linux.

---

## 📦 Installation

Install globally via npm:

```bash
npm install -g devstream
```

Verify the CLI is available:

```bash
devstream --help
```

---

## 📝 Usage

- Detect project stack

```bash
npx devstream detect
```

- Run environment checks

```bash
npx devstream check
```

- Setup project (install deps + generate env)

```bash
npx devstream setup
```

- Show help

```bash
npx devstream help
```

---

## 💡 Tips
- Always run **devstream commands in the root directory** of your project (where `package.json` or `requirements.txt` exists).  
- Always run `devstream check` before `devstream setup` to avoid surprises.
- Use a `.env.template.json` (or similar template) in your repo to let `devstream` generate environment files.

---

## 📖 Example Workflow

1. Detect project type

```bash
npx devstream detect
```

2. Run environment sanity checks

```bash
npx devstream check
```

3. Setup project

```bash
npx devstream setup
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

MIT © Avishkar Kabadi

