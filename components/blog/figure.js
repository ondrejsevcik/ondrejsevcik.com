import styles from "./figure.module.css"

function Figure({ src, alt, maxWidth, children }) {
  const caption = children || alt || null

  return (
    <figure className={styles.figure}>
      <a href={src} style={{ maxWidth: maxWidth ?? "100%" }}>
        <img className={styles.img} src={src} alt={alt} />
      </a>
      {caption ? (
        <figcaption className={styles.figCaption}>{caption}</figcaption>
      ) : null}
    </figure>
  )
}

export default Figure
