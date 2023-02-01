import * as Utils from "./utils.js";
import * as Characters from "./data-business.js";

function loadCharacters() {
  document.getElementById("characters").addEventListener("click", function () {
    Characters.getCharacters().then((data) => {
      const characters = data.results;
      const nodes = [];

      document.getElementById("root").innerHTML = "";

      for (let character of characters) {
        const node = Utils.createCharacterRow(character);
        node.addEventListener("click", function () {
          Characters.getCharacterDetail(character.id).then((data) => {
            const singleCharacter = data;
            Utils.showCharacter(singleCharacter);
          });
        });
        nodes.push(node);
      }

      for (let node of nodes) {
        document.getElementById("root").append(node);
      }
    });
  });
}

function loadLocations() {
  document.getElementById("locations").addEventListener("click", function () {
    document.getElementById("character-detail").innerHTML = "";
    Characters.getLocation().then((data) => {
      const locations = data.results;
      const nodes = [];

      document.getElementById("root").innerHTML = "";

      for (const location of locations) {
        let node = Utils.createLocationRow(location);
        nodes.push(node);
      }
      for (let node of nodes) {
        document.getElementById("root").append(node);
      }
    });
  });
}

function loadEpisodes() {
  document.getElementById("episodes").addEventListener("click", function () {
    document.getElementById("character-detail").innerHTML = "";
    Characters.getEpisodes().then((data) => {
      const episodes = data.results;
      const nodes = [];

      document.getElementById("root").innerHTML = "";

      for (const episode of episodes) {
        let node = Utils.createEpisodeRow(episode);
        nodes.push(node);
      }
      for (let node of nodes) {
        document.getElementById("root").append(node);
      }
    });
  });
}

export { loadCharacters, loadLocations, loadEpisodes };
