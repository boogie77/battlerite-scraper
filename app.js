const Xray = require('x-ray');
const request = require('request');
const fs = require('fs');
const timers = require('timers');

const xray = new Xray();
var champs;

xray('https://battlerite.gamepedia.com/Battlerite_Wiki', '#champsContainer', [{
    images: xray(['div>div>a>img@src']),
    names: xray(['div>div>p>a'])
}]).write('./data/champs.json');

function updateChamps () {
    xray('https://battlerite.gamepedia.com/Battlerite_Wiki', '#champsContainer', [{
        images: xray(['div>div>a>img@src']),
        names: xray(['div>div>p>a'])
    }])
    .write('./data/champs.json')
}

function getAllAbilities (champs) {
    champs.map((champ, index) => {
        xray(`https://battlerite.gamepedia.com/${champ}`, 'div.ability', [{
            title: '.ability--title',
            type: '.ability--type',
            desc: '.ability--description',
            hotKey: xray(['.ability--hotkey']),
            image: 'a.image>img@src',
            cooldown: '.ability--cooldown-text',
            energyCost: '.ability--energy-text',
            abilityIcons: xray('.ability--header_right-bottom', ['div>img@src']),
            castTime: '.ability--casttime-value',
            abilityTitles: xray('.ability--properties', ['.ability--property_title']),
            abilityProps: xray('.ability--properties', ['.ability--property_value'])
        }]).write(`./data/abilites/${champ}.json`);
    });
}

updateChamps();
timers.setTimeout(function () {
    champs = JSON.parse(fs.readFileSync('data/champs.json'));
    console.log('CHAMPS ', champs[0].names);
    if (champs[0].names.length > 0) {
        getAllAbilities(champs[0].names);
    } else {
        console.error('Champ Update Failed!!');
    }
}, 1500)