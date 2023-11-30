import { call, delay, put, select, takeEvery, takeLatest } from 'redux-saga/effects';
import flagsService from 'services/flags';
import cardsService from 'services/cards';
import usersService from 'services/users';
import { loadPayment } from 'store/reducers/cart';
import { addUser } from '../reducers/user';
import { cartChange, changeAmount, changeTotal } from '../reducers/cart';

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
  const total = state.cart.reduce((total, itemInCart) => {
    const item = state.items.find(item => item.id === itemInCart.id);
    return total + item.price * itemInCart.amount;
  }, 0);
  yield put(changeTotal(total));
}

export function* cartSaga() {
  yield takeLatest(loadPayment, loadPaymentSaga);
  yield takeEvery([changeAmount, cartChange], calculateTotal);
}