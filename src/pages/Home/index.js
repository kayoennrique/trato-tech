import Header from 'components/Header';
import styles from './Home.module.scss';
import clock from 'assets/initial.png';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'components/Button';
import {  useEffect } from 'react';
import { loadCategories } from 'store/reducers/categories';
import {  searchItems } from 'store/reducers/items';

export default function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const categories = useSelector(state => state.categories);

  useEffect(() => {
    dispatch(loadCategories());
    dispatch(searchItems());
  }, [dispatch]);

  return (
    <div>
      <Header
        title='Classificados Tech'
        description='Compre diversos tipos de produtos no melhor site do Brasil!'
        image={clock}
        className={styles.header}
      >
        <Button onClick={() => navigate('/anuncie')}>
          Quero anunciar
        </Button>
      </Header>
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
  );
}