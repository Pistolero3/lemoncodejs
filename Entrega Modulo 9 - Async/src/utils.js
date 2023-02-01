import "./styles.css";

const createCharacterRow = (character) => {
  const element = document.createElement("div");

  const avatar = createAvatar(character);
  element.appendChild(avatar);

  const link = createRowText(character);
  element.appendChild(link);

  element.className = "character-row";

  return element;
};

const createAvatar = (character) => {
  const element = document.createElement("img");
  element.width = 150;
  element.className = "thumbnail";
  element.src = character.image;

  return element;
};

const createRowText = (character) => {
  const element = document.createElement("span");
  element.append(character.name);

  return element;
};

const createAvatarDetail = (character) => {
  const element = document.createElement("img");
  element.width = 350;
  element.src = character.image;

  return element;
};

const showCharacter = (character) => {
  const characterDetail = document.getElementById("character-detail");

  characterDetail.innerHTML = "";
  characterDetail.appendChild(createAvatarDetail(character));
  characterDetail.appendChild(createParagraph("Name: " + character.name));
  characterDetail.appendChild(createParagraph("Status: " + character.status));
  characterDetail.appendChild(createParagraph("Species: " + character.species));
};

const createParagraph = (text) => {
  const element = document.createElement("p");
  element.append(text);
  return element;
};

const createLocationRow = (location) => {
  const locationDetail = document.createElement("div");
  locationDetail.className = "location-detail";

  locationDetail.appendChild(createParagraph("Name: " + location.name));
  locationDetail.appendChild(
    createParagraph("Dimension: " + location.dimension)
  );
  locationDetail.appendChild(createParagraph("Type: " + location.type));

  return locationDetail;
};

const createEpisodeRow = (episode) => {
  const episodeDetail = document.createElement("div");
  episodeDetail.className = "episode-detail";

  episodeDetail.appendChild(createParagraph("Name: " + episode.name));
  episodeDetail.appendChild(createParagraph("Air Date: " + episode.air_date));
  episodeDetail.appendChild(createParagraph("Episode: " + episode.episode));

  return episodeDetail;
};

export {
  createCharacterRow,
  showCharacter,
  createLocationRow,
  createEpisodeRow,
};
