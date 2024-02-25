// chalk --> Terminal string styling done right
//npm i chalk 

// Chalk 5 is ESM. If you want to use Chalk with TypeScript or a build tool, you will probably want to use Chalk 4 for now.
// npm i chalk@4.1.2

// Styles

// Modifiers
// reset - Resets the current color chain.
// bold - Make text bold.
// dim - Emitting only a small amount of light.
// italic - Make text italic. (Not widely supported)
// underline - Make text underline. (Not widely supported)
// inverse- Inverse background and foreground colors.
// hidden - Prints the text, but makes it invisible.
// strikethrough - Puts a horizontal line through the center of the text. (Not widely supported)
// visible- Prints the text only when Chalk has a color level > 0. Can be useful for things that are purely cosmetic.

// Colors
// black
// red
// green
// yellow
// blue
// magenta
// cyan
// white
// blackBright (alias: gray, grey)
// redBright
// greenBright
// yellowBright
// blueBright
// magentaBright
// cyanBright
// whiteBright
// Background colors
// bgBlack
// bgRed
// bgGreen
// bgYellow
// bgBlue
// bgMagenta
// bgCyan
// bgWhite

// bgBlackBright (alias: bgGray, bgGrey)
// bgRedBright
// bgGreenBright
// bgYellowBright
// bgBlueBright
// bgMagentaBright
// bgCyanBright
// bgWhiteBright


const chalk = require('chalk');

console.log(chalk.blue('visheshta'))
console.log(chalk.red('visheshta'))
console.log(chalk.bgGreenBright('visheshta'))
console.log(chalk.red.bgGreenBright.bold.strikethrough('visheshta'))