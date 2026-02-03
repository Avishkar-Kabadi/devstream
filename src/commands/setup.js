const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const inquirer = require('inquirer');
const detect = require('./detect');

module.exports = async function setup() {
    console.log(chalk.blue('🚀 Setting up project environment...'));
    const results = detect();

    if (results.stack.includes('node')) {
        const pm = results.packageManager || 'npm';
        console.log(chalk.green(`📦 Installing ${pm} dependencies...`));
        try { execSync(`${pm} install`, { stdio: 'inherit' }); }
        catch { console.log(chalk.red(`❌ Failed to install ${pm} dependencies`)); }
    }

    const envTemplate = path.join(process.cwd(), 'devflow.env.template.json');
    const envFile = path.join(process.cwd(), '.env');
    if (fs.existsSync(envTemplate)) {
        const template = JSON.parse(fs.readFileSync(envTemplate, 'utf8'));
        const answers = await inquirer.prompt(
            Object.keys(template).map(key => ({ type: 'input', name: key, message: `Enter value for ${key}:`, default: template[key] || '' }))
        );
        fs.writeFileSync(envFile, Object.entries(answers).map(([k, v]) => `${k}=${v}`).join('\n'));
        console.log(chalk.green('✔ .env created'));
    }

    console.log(chalk.blue('✅ Setup complete!\n'));
};
