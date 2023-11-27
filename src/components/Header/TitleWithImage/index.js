import styles from './TitleWithImage.module.scss';

export default function TitleWithImage({
  title,
  description,
  image,
  className,
  children
}) {
  return (
    <div className={`${className} ${styles.header}`}>
      <div className={styles['header-text']}>
        <h1>{title}</h1>
        <h2>{description}</h2>
        {children}
      </div>
      <div className={styles['header-image']}>
        <img
          alt={title}
          src={image}
        />
      </div>
    </div>
  )
}