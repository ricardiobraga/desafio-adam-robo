import styles from './page.module.css';
export default function Loading() {
  return (
    <>
      <main className={styles.loadingPage}>
        <div className={styles.ghostContainer}></div>
      </main>
    </>
  );
}
