import styles from './Navbar.module.scss';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import classNames from 'classnames';
import {
  RiShoppingCart2Line,
  RiShoppingCartFill
} from 'react-icons/ri';
import Search from 'components/Search';

const iconProps = {
  color: 'white',
  size: 24
}

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <Logo className={styles.logo} />
      <div className={styles.link}>
        <div>
          <a href='/' className={classNames(styles.link, {
            [styles.selected]: window.location.pathname === '/'
          })}>
            Home
          </a>
        </div>
      </div>
      <div className={styles.search}>
        <Search />
      </div>
      <div className={styles.icons}>
        <a href='/carrinho'>
          {window.location.pathname === 'carrinho'
            ? <RiShoppingCartFill {...iconProps} />
            : <RiShoppingCart2Line {...iconProps} />
          }
        </a>
      </div>
    </nav>
  );
}