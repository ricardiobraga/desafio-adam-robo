import InfoButton from '../Button/InfoButton';
import styles from './styles.module.css';

import { getUsers } from '@/app/libs/Controller';

export type User = {
  id: string;
  title?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  picture?: string;
};

export const UsersList = async () => {
  const users = await getUsers();

  return (
    <>
      <ul className={styles.ulList}>
        {users.data?.map(({ id, firstName, lastName }: User) => {
          return (
            <div key={id} className={styles.listLine}>
              <div
                className={styles.userNameContainer}
              >{`${firstName} ${lastName}`}</div>
              <InfoButton id={id} />
            </div>
          );
        })}
      </ul>
    </>
  );
};
