import { UsersList } from '@/components/UserLists/UsersList';
import styles from './page.module.css';
import Modal from '@/components/Modal/Modal';
import Header from '@/components/Header/Header';

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.listContainer}>
          <UsersList />
        </div>

        <Modal />
      </main>
    </>
  );
}
