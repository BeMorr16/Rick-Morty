import RickMortyAPIClient from "./RickMortyAPIClient.js";

export default class Episodes extends RickMortyAPIClient {
    constructor() {
        super("episode");
    }

    generateCardHtml(item) {
        return `
            <h2>${item.name}</h2>
            <p><strong>Episode:</strong> ${item.episode}</p>
            <p><strong>Air Date:</strong> ${item.air_date}</p>
            
        `;
    }
}