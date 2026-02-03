const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const { execSync } = require('child_process');

module.exports = function detect() {
  const cwd = process.cwd();
  console.log(chalk.blue('🔍 Detecting project...'));

  let recommended = {};
  const devstreamConfig = path.join(cwd, 'devstream.json');
  if (fs.existsSync(devstreamConfig)) {
    recommended = JSON.parse(fs.readFileSync(devstreamConfig, 'utf-8'));
  }

  const results = {
    stack: [],
    packageManager: null,
    warnings: []
  };

  const pkgPath = path.join(cwd, 'package.json');
  if (fs.existsSync(pkgPath)) {
    console.log(chalk.green('✔ Node.js project detected'));
    results.stack.push('node');

    const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));
    const deps = { ...pkg.dependencies, ...pkg.devDependencies };

    if (deps.react) {
      console.log(chalk.cyan('⚛ React project detected'));
      results.stack.push('react');
    }

    if (deps.next) {
      console.log(chalk.cyan('➡ Next.js project detected'));
      results.stack.push('next');
    }

    if (deps.express) {
      console.log(chalk.cyan('🚀 Express backend detected'));
      results.stack.push('express');
    }

    if (deps['@nestjs/core']) {
      console.log(chalk.cyan('🧱 NestJS project detected'));
      results.stack.push('nestjs');
    }

    if (fs.existsSync(path.join(cwd, 'yarn.lock'))) {
      console.log(chalk.magenta('📦 Yarn detected'));
      results.packageManager = 'yarn';
    } else if (fs.existsSync(path.join(cwd, 'pnpm-lock.yaml'))) {
      console.log(chalk.magenta('📦 pnpm detected'));
      results.packageManager = 'pnpm';
    } else {
      console.log(chalk.magenta('📦 npm detected'));
      results.packageManager = 'npm';
    }

    const nodeVersion = process.version.replace('v', '');
    if (recommended.node && !satisfiesVersion(nodeVersion, recommended.node)) {
      console.log(
        chalk.yellow(`⚠ Node version mismatch: recommended ${recommended.node}, you have ${nodeVersion}`)
      );
      results.warnings.push('Node version mismatch');
    }

  } else {
    console.log(chalk.red('✖ No Node.js project detected'));
  }

  const pythonReq = path.join(cwd, 'requirements.txt');
  if (fs.existsSync(pythonReq)) {
    console.log(chalk.cyan('🐍 Python project detected'));
    results.stack.push('python');

    try {
      let pyVersion = execSync('python --version').toString().trim();
      console.log(chalk.green(`🟢 ${pyVersion}`));

      if (recommended.python && !satisfiesVersion(pyVersion.split(' ')[1], recommended.python)) {
        console.log(
          chalk.yellow(`⚠ Python version mismatch: recommended ${recommended.python}, you have ${pyVersion}`)
        );
        results.warnings.push('Python version mismatch');
      }
    } catch (err) {
      console.log(chalk.red('⚠ Python not found'));
      results.warnings.push('Python missing');
    }
  }

  const composerJson = path.join(cwd, 'composer.json');
  if (fs.existsSync(composerJson)) {
    console.log(chalk.cyan('🌀 PHP / Laravel project detected'));
    results.stack.push('php');
  }

  console.log(chalk.blue('✅ Detection complete!'));
  return results;
};

function satisfiesVersion(current, required) {
  if (required.startsWith('>=')) {
    const req = required.replace('>=', '');
    return current >= req;
  }
  return current === required;
}
