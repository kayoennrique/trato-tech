import Header from 'components/Header';
import styles from './Payment.module.scss';
import Select from 'components/Select';
import Button from 'components/Button';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadPayment } from 'store/reducers/cart';

export default function Payment() {
  const [formOfPayment, setFormOfPayment] = useState('-');
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const total = useSelector(state => state.cart.total);
  const valueTotal = formOfPayment === '-' ? total : total * formOfPayment.rate;

  function changePaymentMethod(e) {
    if (e.target.value === '-') return setFormOfPayment('-');

    setFormOfPayment(user.cards.find(card => card.id === e.target.value));
  }

  useEffect(() => {
    dispatch(loadPayment());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <Header title='Pagamento' />
      <div className={styles.data}>
        <p className={styles.form}> Olá {user.name}! Escolha a forma de pagamento: </p>
        <Select value={formOfPayment.id} onChange={changePaymentMethod} placeholder='Forma de pagamento' alt='Forma de pagamento'>
          <option value='-'> Forma de pagamento </option>
          {user.cards?.map(card => (
            <option key={card.id} value={card.id}>{card.name}</option>
          ))}
        </Select>
        <div className={styles.content}>
          {formOfPayment !== '-' && (
            <>
              <p>A forma de pagamento {formOfPayment.name} tem taxa {formOfPayment.rate} x</p>
              <p>O saldo deste cartão é de R$ {formOfPayment.balance.toFixed(2)}</p>
            </>
          )}
          <p> Total com taxas: R$ {valueTotal.toFixed(2)}</p>
        </div>
        <div className={styles.finish}>
          <Button> Finalizar Compra </Button>
        </div>
      </div>
    </div>
  );
}