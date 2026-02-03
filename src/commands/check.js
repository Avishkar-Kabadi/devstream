const { execSync } = require('child_process');
const chalk = require('chalk');
const detect = require('./detect');

module.exports = function check() {
    console.log(chalk.blue('🔎 Running environment checks...'));

    const results = detect();

    if (results.stack.includes('node')) {
        const nodeVersion = process.version.replace('v', '');
        console.log(chalk.green(`🟢 Node ${nodeVersion} – OK`));

        if (results.warnings.includes('Node version mismatch')) {
            console.log(chalk.yellow(`⚠ Recommended Node version not satisfied!`));
        }
    } else {
        console.log(chalk.red('🔴 Node not detected'));
    }

    if (results.packageManager) {
        try {
            const version = execSync(`${results.packageManager} -v`).toString().trim();
            console.log(chalk.green(`🟢 ${results.packageManager} ${version} – OK`));
        } catch (err) {
            console.log(chalk.red(`🔴 ${results.packageManager} not installed properly`));
        }
    } else {
        console.log(chalk.red('🔴 No package manager detected'));
    }

    if (results.stack.includes('python')) {
        let pythonVersion = '';
        try {
            pythonVersion = execSync('python --version').toString().trim();
        } catch (err) {
            try {
                pythonVersion = execSync('python3 --version').toString().trim();
            } catch (err) {
                pythonVersion = null;
            }
        }

        if (pythonVersion) {
            console.log(chalk.green(`🟢 ${pythonVersion} – OK`));
            if (results.warnings.includes('Python version mismatch')) {
                console.log(chalk.yellow(`⚠ Recommended Python version not satisfied!`));
            }
        } else {
            console.log(chalk.red('🔴 Python not found'));
        }
    }

    try {
        const pgVersion = execSync('psql --version', { stdio: 'pipe' }).toString().trim();
        console.log(chalk.green(`🟢 ${pgVersion} – OK`));
    } catch (err) {
        console.log(chalk.yellow('⚠ Postgres not found or not in PATH, skipping DB check'));
    }


    console.log(chalk.blue('✅ Environment check complete!'));
};
