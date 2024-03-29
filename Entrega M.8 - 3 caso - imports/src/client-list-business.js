// client-list-business.js
const DataClient = require("./data-business");
const ClientBusiness = require("./client-business");

function printClientsAccounts() {
  const clients = DataClient.getClients();
  const ul = document.createElement("ul");
  for (let client of clients) {
    const element = ClientBusiness.getClientElement(client);
    ul.appendChild(element);
  }

  document.getElementById("root").appendChild(ul);
}

module.exports = {
  printClientsAccounts: printClientsAccounts,
};
