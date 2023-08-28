import styles from '../app/page.module.css';

type User = {
  id: number;
  name: string;
  username: string;
};
type UserData = {
  userData?: Array<User>;
};

export const UsersList = ({ userData }: UserData) => {
  return (
    <div className={styles.main}>
      {userData?.map((user) => {
        return (
          <>
            <p key={user.id}>{user.name}</p>
          </>
        );
      })}
    </div>
  );
};
