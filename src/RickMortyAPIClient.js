export default class RickMortyAPIClient {
    /**
     * @private
     */
    #url = "https://rickandmortyapi.com/api";
    // Declare variable later used for specific path
    #path;
    //Declare a variable for the data to be added to
    #data = null;
    // Set path equal to the current path of API for class
    constructor(path) {
        this.#path = path;
    }

    async load() {
        try {
            const response = await fetch(this.#url + "/" + this.#path, { method: "GET" });
            const json = await response.json();
            if (json && json.results) {
                this.#data = json.results;
            }
        } catch (error) {
            console.error("Failed to load data:", error);
        }
    }

    get data() {
        return this.#data
    }

mapToCards() {
    const data = this.data;
    if (!data) {
        console.error("No data available to map to cards.");
        return;
    }
    let markup = [];
    
let entryElement = document.getElementById("slides");
for (const item of data) {
const card = document.createElement("div");
card.className = "slide";
card.innerHTML = this.generateCardHtml(item);
markup.push(card);
}
entryElement.append(...markup);
}
generateCardHtml(item) {
    return '';
}
}