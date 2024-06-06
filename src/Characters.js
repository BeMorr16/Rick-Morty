import RickMortyAPIClient from "./RickMortyAPIClient.js";
export default class Characters extends RickMortyAPIClient {
  constructor() {
    super("character");
  }
    generateCardHtml(item) {
        return `
        <h1>${item.name}</h1>
        <img src="${item.image}" class="character-image" />
        <h2 style="text-decoration: underline;">Details</h2>
        <ul id="attributes">
            <li><strong>Gender:</strong> ${item.gender}</li>
            <li><strong>Species:</strong> ${item.species}</li>
            <li><strong>Status:</strong> ${item.status}</li>
            <li><strong>Origin:</strong> ${item.origin.name}</li>
            <li><strong>Location:</strong> ${item.location.name}</li>
        </ul>
        `;
    }
}

