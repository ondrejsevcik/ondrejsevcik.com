import Image from "next/image"
import styles from "./figure.module.css"

function Figure({ src, alt, maxWidth, width, height, children }) {
  const caption = children || alt || null

  return (
    <figure className={styles.figure}>
      <a href={src} style={{ maxWidth: maxWidth ?? "100%" }}>
        <Image
          className={styles.img}
          src={src}
          alt={alt}
          width={width}
          height={height}
        />
      </a>
      {caption ? (
        <figcaption className={styles.figCaption}>{caption}</figcaption>
      ) : null}
    </figure>
  )
}

export default Figure
