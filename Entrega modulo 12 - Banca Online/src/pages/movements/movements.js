import { getMovements } from './movements.api';
import {
  mapAllMovementsFromApiToVm,
  mapAccountFromApiToVm,
} from './movements.mappers';
import { addMovementRows } from './movements.helpers';
import { onSetValues } from '../../common/helpers';
import { getAccount } from './movements.api';
import { history } from '../../core/router';

const params = history.getParams();
const isAccountChosen = Boolean(params.id);

if (isAccountChosen) {
  getAccount(params.id).then((apiAccount) => {
    let account = mapAccountFromApiToVm(apiAccount);
    onSetValues(account);
    getMovements(params.id).then((movements) => {
      const viewModelMovements = mapAllMovementsFromApiToVm(movements);
      addMovementRows(viewModelMovements);
    });
  });
} else {
  alert(
    'Por favor, vuelva a Mis Cuentas y navegue a través de la opción Movimientos'
  );
}
