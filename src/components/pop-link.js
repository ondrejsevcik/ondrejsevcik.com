import React from "react"
import * as styles from "./pop-link.module.css"

export function PopLink({ children, ...props }) {
  return (
    <a className={styles.tilt} {...props}>
      <span className={styles.tiltBg}></span>
      <span className={styles.tiltContent}>{children}</span>
    </a>
  )
}
