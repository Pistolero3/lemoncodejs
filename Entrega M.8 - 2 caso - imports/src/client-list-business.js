// client-list-business.js
import * as Client from "./data-business";
import * as ClientBusiness from "./client-business";

function printClientsAccounts() {
  const clients = Client.getClients();
  const ul = document.createElement("ul");
  for (let client of clients) {
    const element = ClientBusiness.getClientElement(client);
    ul.appendChild(element);
  }

  document.getElementById("root").appendChild(ul);
}

export { printClientsAccounts };
