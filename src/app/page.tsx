import { UsersList } from '@/components/UserLists/UsersList';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>MONTANHISTAS CADASTRADOS</h1>
      <div className={styles.listContainer}>
        <UsersList />
      </div>
    </main>
  );
}
