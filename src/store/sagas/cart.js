import { takeLatest } from "redux-saga/effects";
import { loadPayment } from "store/reducers/cart";

function* loadPaymentSaga() {
yield console.log('carregando pagamento');
}

export function* cartSaga() {
    yield takeLatest(loadPayment, loadPaymentSaga);
}
