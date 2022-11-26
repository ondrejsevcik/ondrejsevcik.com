import styles from "./warning-box.module.css"

const WarningBox = ({ children }) => (
  <div className={styles.warningBox}>{children}</div>
)

export default WarningBox
