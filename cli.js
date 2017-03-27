#!/usr/bin/env node

process.bin = process.title = 'css-wrap';

var program = require('commander');
var pkg = require('./package.json');

var css_wrap = require('./css_wrap');

program
  .version(pkg.version)
  .usage('<string|file>')
  .option('--selector <value>', 'A namespace selector in which to wrap CSS')
  .option('--skip [value]', 'Skip css rules by regular expressions')
  .parse(process.argv);


if (program.args.length < 1) {
   program.help();
}

console.log(css_wrap(program.args[0], {
  selector: program.selector,
  skip: program.skip
}));
