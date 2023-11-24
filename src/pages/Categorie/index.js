import Header from 'components/Header';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export default function Categorie() {
  const { nameCategorie } = useParams();
  const categorie = useSelector(state => state.categories.find(categorie => categorie.id === nameCategorie));
  return (
    <div>
      <Header
        title={categorie.name}
        description={categorie.description}
        image={categorie.header}
      />
    </div>
  )
}