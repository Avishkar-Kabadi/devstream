const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const inquirer = require('inquirer');
const detect = require('./detect');

const ENV_TEMPLATE = {
    PORT: '3000',
    DATABASE_URL: '',
    JWT_SECRET: '',
    API_KEY:''
};

module.exports = async function setup() {
    console.log(chalk.blue('\n🚀 Setting up project environment...\n'));

    const results = detect?.() || { stack: ['node'], packageManager: 'npm' };

    if (results.stack?.includes('node')) {
        const pm = results.packageManager || 'npm';
        console.log(chalk.green(`📦 Installing ${pm} dependencies...`));
        try {
            execSync(`${pm} install`, { stdio: 'inherit' });
        } catch {
            console.log(chalk.red(`❌ Failed to install ${pm} dependencies`));
        }
    }

    const projectRoot = process.cwd();
    const envPath = path.join(projectRoot, '.env');

    if (fs.existsSync(envPath)) {
        console.log(chalk.yellow('⚠️  .env already exists. Skipping env setup.\n'));
        return;
    }

    const answers = await inquirer.prompt(
        Object.entries(ENV_TEMPLATE).map(([key, defaultValue]) => ({
            type: 'input',
            name: key,
            message: `Enter value for ${key}:`,
            default: defaultValue
        }))
    );

    const envContent = Object.entries(answers)
        .map(([key, value]) => `${key}=${value}`)
        .join('\n');

    fs.writeFileSync(envPath, envContent);

    console.log(chalk.green('\n✔ .env created successfully'));
    console.log(chalk.gray(`📄 Location: ${envPath}\n`));
    console.log(chalk.blue('✅ Setup complete!\n'));
};
