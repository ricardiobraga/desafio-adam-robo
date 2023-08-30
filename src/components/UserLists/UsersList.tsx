import styles from './styles.module.css';

import { getUsers } from '@/app/libs/getUsers';
import InfoIcon from '@mui/icons-material/Info';
type User = {
  id: number;
  title?: string;
  firstName?: string;
  lastName?: string;
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
              <button className={styles.button}>
                <InfoIcon /> info
              </button>
            </div>
          );
        })}
      </ul>
    </>
  );
};
