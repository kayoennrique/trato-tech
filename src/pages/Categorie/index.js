import Header from 'components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './Categorie.module.scss';
import Item from 'components/Item';
import Button from 'components/Button';
import { loadOneCategory } from 'store/reducers/categories';
import { useEffect } from 'react';

export default function Categorie() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { nameCategorie } = useParams();
  const { categorie, items } = useSelector(state => {
    const regexp = new RegExp(state.search, 'i');
    return {
      categorie: state.categories.find(categorie => categorie.id
        === nameCategorie) || {},
      items: state.items.filter(item => item.categorie === nameCategorie && item.title.match(regexp))
    }
  });

  useEffect(() => {
    dispatch(loadOneCategory(nameCategorie));
  }, [dispatch, nameCategorie]);

  return (
    <div>
      <Header
        title={categorie.name}
        description={categorie.description}
        image={categorie.header}
      >
        <Button onClick={() => navigate(`/anuncie/${nameCategorie}`)}>
          Quero anunciar
        </Button>
      </Header>
      <div className={styles.items}>
        {items?.map(item => (<div key={item.id}>
          <Item key={item.id} {...item} />
        </div>
        ))}
      </div>
    </div>
  );
}