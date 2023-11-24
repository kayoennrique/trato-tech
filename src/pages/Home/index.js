import Header from 'components/Header';
import styles from './Home.module.scss';
import clock from 'assets/initial.png';

export default function Home() {
  return (
    <div>
      <Header
        title='Classificados Tech'
        description='Compre diversos tipos de produtos no melhor site do Brasil!'
        image={clock}
        className={styles.header}
      />
    </div>
  )
}