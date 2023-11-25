import Header from 'components/Header';
import styles from './Cart.module.scss';
import { useSelector } from 'react-redux';
import Item from 'components/Item';

export default function Cart() {
  const cart = useSelector(state => {
    const cartReduce = state.cart.reduce((items, itemInCart) => {
      const item = state.items.find(item => item.id === itemInCart.id);
      items.push({
        ...item,
        quantity: itemInCart.quantity,
      });
      return items;
    }, []);
    return cartReduce;
  });
  return (
    <div>
      <Header
        title='Carrinho de compras'
        description='Confira produtos que você adicionou ao carrinho.'
      />
      <div className={styles.cart}>
        {cart.map(item => <Item key={item.id} {...item} cart />)}
        <div className={styles.total}>
          <strong>
            Resumo da compra
          </strong>
          <span>
            Subtotal: <strong> R$ {0.0.toFixed(2)} </strong>
          </span>
        </div>
      </div>
    </div>
  )
}