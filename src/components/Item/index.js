import {
  AiFillMinusCircle,
  AiFillPlusCircle,
  AiFillEdit
} from 'react-icons/ai';
import {
  FaCartPlus,
  FaCheckCircle,
  FaWindowClose
} from 'react-icons/fa';
import {
  GoBookmark,
  GoBookmarkFill
} from "react-icons/go";
import styles from './Item.module.scss';
import { favoriteChange, itemChange, itemDelete } from 'store/reducers/items';
import { useDispatch, useSelector } from 'react-redux';
import { cartChange, changeAmount } from 'store/reducers/cart';
import classNames from 'classnames';
import { useState } from 'react';
import Input from 'components/Input';
import { memo } from 'react';

const iconProps = {
  size: 24,
  color: '#041833',
};

const amountProps = {
  size: 32,
  color: '#1875E8'
}

function Item(props) {
  const {
    title,
    photo,
    price,
    description,
    favorite,
    id,
    cart,
    amount,
  } = props;
  const [editMode, setEditMode] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const dispatch = useDispatch();
  const beInCart = useSelector(state => state.cart.data?.some(itemInCart => itemInCart.id === id));

  function resolveFavorite() {
    dispatch(favoriteChange(id));
  }

  function resolveCart() {
    dispatch(cartChange(id));
  }

  const componentEditMode =
    <>
      {editMode
        ? <FaCheckCircle
          {...iconProps}
          className={styles['item-action']}
          onClick={() => {
            setEditMode(false)
            dispatch(itemChange(
              {
                id,
                item: { title: newTitle }
              }))
          }}
        />
        : <AiFillEdit
          {...iconProps}
          className={styles['item-action']}
          onClick={() => setEditMode(true)}
        />
      }
    </>

  return (
    <div className={classNames(styles.item, {
      [styles.itemInCart]: cart,
    })}>
      <FaWindowClose
        {...iconProps}
        className={`${styles['item-action']} ${styles['item-delete']}`}
        onClick={() => dispatch(itemDelete(id))}
      />
      <div className={styles['item-image']}>
        <img src={photo} alt={title} />
      </div>
      <div className={styles['item-description']}>
        <div className={styles['item-title']}>
          {editMode
            ? <Input
              value={newTitle}
              onChange={e => setNewTitle(e.target.value)}
            />
            : <h2>{title}</h2>
          }
          <p>{description}</p>
        </div>
        <div className={styles['item-info']}>
          <div className={styles['item-price']}>
            R$ {price.toFixed(2)}
          </div>
          <div className={styles['item-actions']}>
            {favorite
              ? <GoBookmarkFill {...iconProps} color='#ff0000' className={styles['item-action']} onClick={resolveFavorite} />
              : <GoBookmark {...iconProps} className={styles['item-action']} onClick={resolveFavorite} />
            }
            {cart
              ? (
                <div className={styles.amount}>
                  Quantidade:
                  <AiFillMinusCircle
                    {...amountProps}
                    onClick={() => {
                      if (amount >= 1) {
                        dispatch(changeAmount({ id, amount: -1 }));
                      }
                    }}
                  />
                  <span>{String(amount || 0).padStart(2, '0')}</span>
                  <AiFillPlusCircle
                    {...amountProps}
                    onClick={() => dispatch(changeAmount({ id, amount: +1 }))}
                  />
                </div>
              )
              : (
                <>
                  <FaCartPlus
                    {...iconProps}
                    color={beInCart ? '#1875E8' : iconProps.color}
                    className={styles['item-action']}
                    onClick={resolveCart}
                  />
                  {componentEditMode}
                </>
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Item);