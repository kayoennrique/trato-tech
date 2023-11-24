import styles from './Item.module.scss';

import {
  AiOutlineHeart,
  AiFillHeart,
} from 'react-icons/ai';
import {
  FaCartPlus
} from 'react-icons/fa';
import { favoriteChange } from 'store/reducers/items';
import { useDispatch } from 'react-redux';

const iconProps = {
  size: 24,
  color: '#041833',
};

export default function Item(props) {
  const {
    title,
    photo,
    price,
    description,
    favorite,
    id
  } = props;
  const dispatch = useDispatch();

  function resolveFavorite() {
    dispatch(favoriteChange(id));
  }

  return (
    <div className={styles.item}>
      <div className={styles['item-image']}>
        <img src={photo} alt={title} />
      </div>
      <div className={styles['item-description']}>
        <div className={styles['item-title']}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className={styles['item-info']}>
          <div className={styles['item-price']}>
            R$ {price.toFixed(2)}
          </div>
          <div className={styles['item-actions']}>
            {favorite
              ? <AiFillHeart {...iconProps} color='#ff0000' className={styles['item-action']} onClick={resolveFavorite} />
              : <AiOutlineHeart {...iconProps} className={styles['item-action']} onClick={resolveFavorite} />
            }
            <FaCartPlus
              {...iconProps}
              color={false ? '#1875E8' : iconProps.color}
              className={styles['item-action']}
            />
          </div>
        </div>
      </div>
    </div>
  )
}