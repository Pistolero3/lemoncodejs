// client-business.js
import * as Data from "./data-business";
import * as Accounts from "./account-business";

function getClientElement(client) {
  const allAccounts = Data.getAccounts();
  const clientAccounts = [];
  for (let account of allAccounts) {
    if (account.clientId === client.id) {
      clientAccounts.push(account);
    }
  }

  const node = getClientNode(client);
  const ul = Accounts.getClientAccountsElement(clientAccounts);

  node.appendChild(ul);

  return node;
}

function getClientNode(client) {
  const li = document.createElement("li");
  li.append(getFullName(client));

  return li;
}

function getFullName(client) {
  return client.first_name + " " + client.last_name;
}

export { getClientElement };
