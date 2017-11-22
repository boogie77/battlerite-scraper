"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Xray = require("x-ray");
const xray = Xray();
var ChampAbilities;
(function (ChampAbilities) {
    function getAll(champs) {
        if (champs) {
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
                    }]).write(`./data/abilities/${champ}.json`);
            });
        }
        else {
            console.error('Champ Update Failed!!');
        }
    }
    ChampAbilities.getAll = getAll;
    function getByChamp(champ) {
        if (champ) {
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
                }]).write(`./data/abilities/${champ}.json`);
        }
        else {
            console.error(`${champ} Update Failed!!`);
        }
    }
    ChampAbilities.getByChamp = getByChamp;
})(ChampAbilities = exports.ChampAbilities || (exports.ChampAbilities = {}));
