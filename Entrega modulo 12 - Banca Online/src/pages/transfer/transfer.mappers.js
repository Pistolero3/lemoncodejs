export const mapTransferFromVmToApi = (transfer) => {
  return (transfer = {
    iban: transfer.iban.replace(/(\w{4})(\B)/g, '$1 '),
    name: transfer.name,
    amount: Number(transfer.amount),
    date: `${transfer.day}/${transfer.month}/${transfer.year}`,
    concept: transfer.concept,
    notes: transfer.notes,
    email: transfer.email,
  });
};
