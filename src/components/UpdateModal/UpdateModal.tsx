import { getUserByID } from '@/app/libs/Controller';
import { User } from '../UserLists/UsersList';
import styles from './styles.module.css';
import Image from 'next/image';

type ComponentProps = {
  id: string;
};

export default async function UpdateModal({ id }: ComponentProps) {
  const user: User = await getUserByID(id);
  return (
    <>
      <div className={styles.userInfo}>
        <div className={styles.imageContainer}>
          <Image
            src={`${user.picture}`}
            width={100}
            height={100}
            alt="Foto do usuário"
            priority
          />
        </div>
        <div>
          <p
            className={styles.userInfoName}
          >{`${user.title} ${user.firstName} ${user.lastName}`}</p>

          <p>{`${user.email}`}</p>
        </div>
      </div>
    </>
  );
}
