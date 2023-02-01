function getCharacters() {
  return fetch("https://rickandmortyapi.com/api/character").then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      console.log(response.statusText);
    }
  });
}

function getCharacterDetail(characterId) {
  return fetch(`https://rickandmortyapi.com/api/character/${characterId}`).then(
    (response) => {
      if (response.ok) {
        return response.json();
      } else {
        console.log(response.statusText);
      }
    }
  );
}

function getLocation() {
  return fetch("https://rickandmortyapi.com/api/location").then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      console.log(response.statusText);
    }
  });
}

function getEpisodes() {
  return fetch("https://rickandmortyapi.com/api/episode").then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      console.log(response.statusText);
    }
  });
}

export { getCharacters, getCharacterDetail, getLocation, getEpisodes };
