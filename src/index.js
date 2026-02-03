#!/usr/bin/env node

const { Command } = require('commander');
const detect = require('./commands/detect');
const check = require('./commands/check');
const setup = require('./commands/setup');
const showHelp = require('./commands/help');

const program = new Command();

program
    .name('devstream')
    .description('🚀 Developer environment orchestration CLI')
    .version('0.1.0');

program.command('detect').description('Detect project stack').action(detect);
program.command('check').description('Sanity check your environment').action(check);

program.command('setup').description('Project Setup').action(async () => {
    await setup();
});

program.command('help').description('Show help').action(showHelp);

program.on('command:*', () => {
    console.log(`\n❌ Unknown command: ${program.args.join(' ')}`);
    showHelp();
    process.exit(1);
});

if (!process.argv.slice(2).length) {
    showHelp();
} else {
    program.parse(process.argv);
}
