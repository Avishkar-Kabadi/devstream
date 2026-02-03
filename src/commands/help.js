const chalk = require('chalk');

function showHelp() {
  console.log(chalk.blue.bold('\n🚀 devstream CLI Help'));
  console.log(chalk.green('Usage:'));
  console.log('  devstream <command> [options]\n');

  console.log(chalk.green('Commands:'));
  console.log('  detect     🔍 Detect project stack');
  console.log('  check      ✅ Run environment sanity checks');
  console.log('  setup      🛠 Setup project environment');
  console.log('  help       💡 Show this help message\n');

  console.log(chalk.green('Examples:'));
  console.log('  devstream detect       # Detect project stack');
  console.log('  devstream check        # Run environment checks');
  console.log('  devstream setup        # Setup project environment\n');

  console.log(chalk.green('Tips:'));
  console.log('  Always run `devstream check` before `devstream setup` for smooth setup.\n');
}

module.exports = showHelp;
