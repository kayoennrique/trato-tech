import Header from 'components/Header';
import styles from './Home.module.scss';
import clock from 'assets/initial.png';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Home() {
  const navigate = useNavigate();
  const categories = useSelector(state => state.categories);
  return (
    <div>
      <Header
        title='Classificados Tech'
        description='Compre diversos tipos de produtos no melhor site do Brasil!'
        image={clock}
        className={styles.header}
      />
      <div className={styles.categories}>
        <div className={styles['categories-title']}>
          <h1>
            Categorias
          </h1>
        </div>
        <div className={styles['categories-container']}>
          {categories.map((categorie, index) => (
            <div key={index} onClick={() => navigate(`/categoria/${categorie.id}`)}>
              <img src={categorie.thumbnail} alt={categorie.name} />
              <h1>{categorie.name}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}