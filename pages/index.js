import styles from '../components/Square.module.css'

export default function Index() {
  return (
      <body className={styles.background}>
    <div className={styles.Square}>
      <h1>TODO LIST</h1>
      <ul className={styles.ul}>
          <li>TODO 1</li>
          <li>TODO 2</li>
          <li>TODO 3</li>
          <li>TODO 4</li>
          <li>TODO 5</li>
      </ul>
          </div>
          </body>
  );
}