import { call, put, takeLatest } from "redux-saga/effects";
import cardsService from "services/cards";
import flagsService from "services/flags";
import usersService from "services/users";
import { loadPayment } from "store/reducers/cart";
import { addUser } from "store/reducers/user";

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
        yield put(addUser({...user, cards: cardsWithFlags}));
    } catch (e) { }
}

export function* cartSaga() {
    yield takeLatest(loadPayment, loadPaymentSaga);
}