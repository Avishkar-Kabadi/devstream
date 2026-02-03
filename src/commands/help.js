const chalk = require('chalk');

function showHelp() {
  console.log(chalk.blue.bold('\n🚀 DevFlow CLI Help'));
  console.log(chalk.green('Usage:'));
  console.log('  devflow <command> [options]\n');

  console.log(chalk.green('Commands:'));
  console.log('  detect     🔍 Detect project stack');
  console.log('  check      ✅ Run environment sanity checks');
  console.log('  setup      🛠 Setup project environment');
  console.log('  help       💡 Show this help message\n');

  console.log(chalk.green('Examples:'));
  console.log('  devflow detect       # Detect project stack');
  console.log('  devflow check        # Run environment checks');
  console.log('  devflow setup        # Setup project environment\n');

  console.log(chalk.green('Tips:'));
  console.log('  Always run `devflow check` before `devflow setup` for smooth setup.\n');
}

module.exports = showHelp;
