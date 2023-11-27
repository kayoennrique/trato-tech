import styles from './TitleWithoutImage.module.scss';

export default function TitleWithoutImage({
  title,
  description,
  children
}) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        {title}
      </h1>
      <h2 className={styles.description}>
        {description}
      </h2>
      {children}
    </div>
  )
}