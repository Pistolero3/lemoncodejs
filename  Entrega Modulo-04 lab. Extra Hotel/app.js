console.log("Aquí empieza la entrega del modulo 04 - laboratorio");

let hotelRoom = {
  Standard: 100,
  JuniorSuite: 120,
  Suite: 150,
};

let parking;
let getParking = () => {
  parking = Number(document.getElementById("parking").value);
  return parking;
};

let roomTypeInput;
let roomPrice;
var getRoomType = () => {
  let roomType = document.getElementById("roomtype");
  roomTypeInput = roomType.options[roomType.selectedIndex].text;
  roomPrice = hotelRoom[roomTypeInput];
  return roomPrice;
};

let nightNumber;
var getRoomNights = () => {
  nightNumber = Number(document.getElementById("nights").value);
  return nightNumber;
};

let bedTypeInput;
let bedType;
var getBedType = () => {
  bedType = document.getElementById("bedtype");
  bedTypeInput = bedType.options[bedType.selectedIndex].text;
  return bedTypeInput;
};

let hotelRoomPrice;
var getRoomPrice = () => {
  if (nightNumber > 0) {
    hotelRoomPrice = roomPrice * nightNumber;
  }

  if (document.getElementById("spa").checked) {
    hotelRoomPrice = 20 * nightNumber + hotelRoomPrice;
  }

  switch (bedTypeInput) {
    case "Individual":
      let percentage = hotelRoomPrice * 0.25;
      hotelRoomPrice = hotelRoomPrice - percentage;
      break;
    case "Triple":
      hotelRoomPrice = hotelRoomPrice * 0.25 + hotelRoomPrice;
      break;
    default:
      hotelRoomPrice = hotelRoomPrice;
      break;
  }

  hotelRoomPrice = parking > 0 ? 10 * parking + hotelRoomPrice : hotelRoomPrice;
  if (hotelRoomPrice) {
    document.getElementById(
      "price"
    ).innerHTML = `Your price is ${hotelRoomPrice} euros`;
    hotelRoomPrice = undefined;
  } else {
    document.getElementById("price").innerHTML = `Price`;
    alert("Please, make sure your room type and number of days are selected");
  }
};

document.getElementById("roomtype").addEventListener("change", getRoomType);
document.getElementById("nights").addEventListener("keyup", getRoomNights);
document.getElementById("bedtype").addEventListener("change", getBedType);
document.getElementById("parking").addEventListener("keyup", getParking);
document.getElementById("calculate").addEventListener("click", getRoomPrice);
