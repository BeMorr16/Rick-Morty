import Characters from "../src/Characters.js"
import Locations from "../src/Locations.js"
/**
 * @jest-environment jsdom
 */
test('use jsdom in this test file', () => {
    const characters = new Characters();
    (async () => {
        await characters.load();
    })();
    const slidesDiv = characters.generateCardHtml()
    expect(slidesDiv).toContain("")
})

test('use jsdom in this test file locations', () => {
    const locations = new Locations();
    (async () => {
        await locations.load();
    })();
    locations.mapToCards()
    const slidesDiv = document.getElementsByClassName("slide");
    expect(slidesDiv).not.toBeNull()
})

test('use jsdom in this test file', () => {
    const characters = new Characters();
    (async () => {
        await characters.load();
    })();
    characters.mapToCards()
    const picture = document.getElementsByClassName("character-image");
    expect(picture).not.toBeNull()
})
