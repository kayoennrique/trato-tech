import Header from 'components/Header';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styles from './Categorie.module.scss';
import Item from 'components/Item';

export default function Categorie() {
  const { nameCategorie } = useParams();
  const { categorie, items } = useSelector(state => ({
    categorie: state.categories.find(categorie => categorie.id === nameCategorie),
    items: state.items.filter(item => item.categorie === nameCategorie),
  }));

  return (
    <div>
      <Header
        title={categorie.name}
        description={categorie.description}
        image={categorie.header}
      />
      <div className={styles.items}>
        {items?.map(item => (          <div key={item.id}>
            <Item key={item.id} {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}