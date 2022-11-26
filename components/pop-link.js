import styles from "./pop-link.module.css"

export function PopLink({ icon, label, href, rel }) {
  return (
    <a className={styles.link} aria-label={label} href={href} rel={rel}>
      <span className={styles.linkBg} aria-hidden="true"></span>
      <span className={styles.content} aria-hidden="true">
        {icon}
      </span>
    </a>
  )
}
