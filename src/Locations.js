import RickMortyAPIClient from "./RickMortyAPIClient.js";
export default class Locations extends RickMortyAPIClient {
    constructor() {
        super("location");
    }

    generateCardHtml(item) {
        return `
            <h2>${item.name}</h2>
            <h6>Type</h6>
            <p>${item.type}</p>
            <h6>Dimension</h6>
            <p>${item.dimension}</p>
        `;
    }
}