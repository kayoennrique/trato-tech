import styles from './Navbar.module.scss';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import classNames from 'classnames';
import {
  RiShoppingCart2Line,
  RiShoppingCartFill
} from 'react-icons/ri';
import Search from 'components/Search';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const iconProps = {
  color: 'white',
  size: 24
}

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <nav className={styles.nav}>
      <Logo className={styles.logo} onClick={() => navigate('/')} />
      <div className={styles.link}>
        <div>
          <Link to='/' className={classNames(styles.link, {
            [styles.selected]: location.pathname === '/'
          })}>
            Home
          </Link>
        </div>
      </div>
      <div className={styles.search}>
        <Search />
      </div>
      <div className={styles.icons}>
        <Link to='/carrinho'>
          {location.pathname === 'carrinho'
            ? <RiShoppingCartFill {...iconProps} />
            : <RiShoppingCart2Line {...iconProps} />
          }
        </Link>
      </div>
    </nav>
  );
}