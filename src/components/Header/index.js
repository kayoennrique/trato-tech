import styles from './Header.module.scss';
import TitleWithImage from './TitleWithImage';
import TitleWithoutImage from './TitleWithoutImage';

export default function Header({ title, description, className = '', image }) {
  return (
    <header className={styles.header}>
      {title && !image &&
        <TitleWithoutImage
          title={title}
          description={description}
        />
      }
      {title && image &&
        <TitleWithImage
          title={title}
          description={description}
          image={image}
          className={className}
        />
      }
    </header>
  )
}