import Header from 'components/Header';
import styles from './Payment.module.scss';
import Select from 'components/Select';
import Button from 'components/Button';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadPayment } from 'store/reducers/cart';

export default function Payment() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPayment());
  }, [dispatch])

  return (
    <div className={styles.container}>
      <Header title='Pagamento' />
      <div className={styles.data}>
        <p className={styles.form}> Olá usuário! Escolha a forma de pagamento: </p>
        <Select placeholder='Forma de pagamento' alt='Forma de pagamento'>
          <option value='-'> Forma de pagamento </option>
        </Select>
        <div className={styles.content}>
          <p> Total com taxas: R$ 0.00 </p>
        </div>
        <div className={styles.finish}>
          <Button> Finalizar Compra </Button>
        </div>
      </div>
    </div>
  )
}