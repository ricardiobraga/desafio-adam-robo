import { UsersList } from '@/components/UsersList';
import getUsers from './libs/getUsers';
import styles from './page.module.css';

export default async function Home() {
  const users = await getUsers();

  return (
    <main className={styles.main}>
      <h1>Climbers</h1>
      <UsersList userData={users} />
    </main>
  );
}
