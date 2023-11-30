import { call, delay, put, select, takeEvery, takeLatest } from 'redux-saga/effects';
import flagsService from 'services/flags';
import cardsService from 'services/cards';
import usersService from 'services/users';
import { finishPayment, loadPayment, resetCart } from 'store/reducers/cart';
import { addUser } from '../reducers/user';
import { cartChange, changeAmount, changeTotal } from '../reducers/cart';
import { createStandaloneToast } from '@chakra-ui/toast';

const { toast } = createStandaloneToast();

const userLogged = 1;

function* loadPaymentSaga() {
  try {
    const user = yield call(usersService.searchForId, userLogged);
    const cards = yield call(cardsService.searchForIdUser, userLogged);
    const flagIds = cards.map(card => card.flagId);
    const flags = yield call(flagsService.searchForId, flagIds);
    const cardsWithFlags = cards.map(card => {
      const cardFlag = flags.find(flag => flag.id === card.flagId);
      return { ...card, rate: cardFlag.rate, flag: cardFlag.name };
    });
    yield put(addUser({ ...user, cards: cardsWithFlags }));
  } catch (e) { }
}

function* calculateTotal() {
  yield delay(500);
  const state = yield select();
  const total = state.cart.data.reduce((total, itemInCart) => {
    const item = state.items.find(item => item.id === itemInCart.id);
    return total + item.price * itemInCart.amount;
  }, 0);
  yield put(changeTotal(total));
}

function* finishPaymentSaga({ payload }) {
  const { valueTotal, formOfPayment } = payload;

  if (valueTotal > formOfPayment.balance) {
    return yield toast({
      title: 'Erro',
      description: 'Saldo insuficiente',
      status: 'error',
      duration: 2000,
      isClosable: true
    });
  } else {
    yield toast({
      title: 'Sucesso!',
      description: 'Compra realizada com sucesso!',
      status: 'success',
      duration: 2000,
      isClosable: true
  });
  yield put(resetCart());
  }
}

export function* cartSaga() {
  yield takeLatest(loadPayment, loadPaymentSaga);
  yield takeEvery([changeAmount, cartChange], calculateTotal);
  yield takeLatest(finishPayment, finishPaymentSaga)
}