export const mapAllMovementsFromApiToVm = (movements) => {
  return movements.map((movement) => mapMovementFromApiToVm(movement));
};

const mapMovementFromApiToVm = (movement) => {
  return {
    ...movement,
    amount: `${movement.amount} €`,
    balance: `${movement.balance} €`,
    transaction: new Date(movement.transaction).toLocaleDateString(),
    realTransaction: new Date(movement.realTransaction).toLocaleDateString(),
  };
};

export const mapAccountFromApiToVm = (account) => {
  return {
    ...account,
    balance: `${account.balance} €`,
    alias: account.name,
  };
};
