const { generate, presetPalettes,
  red, volcano, gold, yellow, lime, green, cyan, blue, geekblue, purple, magenta, grey } = require('@ant-design/colors');
const fs = require('fs');
const colors = Object.keys(presetPalettes).map((name) => {
  return  {
    name: name[0].toUpperCase() + name.slice(1),
    color: presetPalettes[name].primary,
    shades: presetPalettes[name]
  };
});
fs.writeFileSync('./presetPalettes.json', JSON.stringify(colors));