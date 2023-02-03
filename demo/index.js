import figlet from "figlet";
const {textSync} = figlet;

console.log(figlet.textSync('RED!', {
    font: 'Barbwire',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 80,
    whitespaceBreak: true
}));