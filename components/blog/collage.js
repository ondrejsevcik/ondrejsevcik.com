import Image from "next/image"
import styles from "./collage.module.css"

function Collage() {
  // TODO move this into mdx template
  const images = [
    {
      src: "/images/year-in-review-2022-collage/vienna-prater.jpeg",
      alt: "Prater park in Vienna",
    },
    {
      src: "/images/year-in-review-2022-collage/vienna-picnic.jpeg",
      alt: "Vienna picnic spot",
    },
    {
      src: "/images/year-in-review-2022-collage/louis-beer.jpeg",
      alt: "One of the many good beers I drank this year",
    },
    {
      src: "/images/year-in-review-2022-collage/hiking-in-austria.jpeg",
      alt: "Hiking in Austria",
    },
    {
      src: "/images/year-in-review-2022-collage/running.jpeg",
      alt: "Lost running through forests",
    },
    {
      src: "/images/year-in-review-2022-collage/portugal-trip.jpeg",
      alt: "Portugal trip",
    },
    {
      src: "/images/year-in-review-2022-collage/moo.jpeg",
      alt: "Cows in Innsbruck, Austria",
    },
    {
      src: "/images/year-in-review-2022-collage/denmark-bike-trip.jpeg",
      alt: "Biking trip through Denmark",
    },
    {
      src: "/images/year-in-review-2022-collage/sydney.jpeg",
      alt: "Sydney panorama",
    },
    {
      src: "/images/year-in-review-2022-collage/sydney-pool.jpeg",
      alt: "Sydney swimming pool",
    },
    {
      src: "/images/year-in-review-2022-collage/estonia-land.jpeg",
      alt: "Lost in Estonia forests",
    },
    {
      src: "/images/year-in-review-2022-collage/christmas-cookies.jpeg",
      alt: "Christmas baking",
    },
  ]

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
      <p className={styles.description}>
        Year in pictures - most of my time after work was spent outdoors.
      </p>
    </div>
  )
}

export default Collage
