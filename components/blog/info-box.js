import styles from "./info-box.module.css"

// TODO: this is identical to WarningBox
const InfoBox = ({ children }) => (
  <div className={styles.infoBox}>{children}</div>
)

export default InfoBox
