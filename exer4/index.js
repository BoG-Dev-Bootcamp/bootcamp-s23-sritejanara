import figlet from "figlet";
import axios from "axios";
const {textSync} = figlet;

const ind = Math.floor(1 + Math.random() * 1008)
axios.get("https://pokeapi.co/api/v2/pokemon/" + ind)
    .then(function (response) {
        const name = response.data.name;
        console.log(figlet.textSync(name, {
            font: 'Bloody',
            horizontalLayout: 'default',
            verticalLayout: 'default',
            width: 80,
            whitespaceBreak: true
        }));
    })
    .catch(function (error) {
        console.log(error);
    })

