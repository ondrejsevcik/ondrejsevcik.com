import styles from "./callout.module.css"

function Callout({ emoji, children }) {
  return (
    <aside className={styles.callout}>
      {emoji ? <div>{emoji}</div> : null}
      <div>{children}</div>
    </aside>
  )
}

export default Callout
