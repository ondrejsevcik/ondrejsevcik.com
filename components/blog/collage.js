import Image from "next/image"
import styles from "./collage.module.css"

function Collage({ description, images }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.collage}>
        {images.map(img => (
          <a key={img.src} href={img.src} title={img.alt}>
            <Image
              className={styles.collageImg}
              src={img.src}
              alt={img.alt}
              width={300}
              height={300}
            />
          </a>
        ))}
      </div>
      <p className={styles.description}>{description}</p>
    </div>
  )
}

export default Collage
