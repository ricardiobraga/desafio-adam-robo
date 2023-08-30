import { useState } from 'react';
import { updateUser } from '@/app/libs/Controller';
import styles from './styles.module.css';

type ComponentProps = {
  id: string;
  reload: () => void;
  deleteUser: (id: string) => void;
};

export default function Input({ id, reload, deleteUser }: ComponentProps) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [isDelete, setIsDelete] = useState(false);
  const [deleteBtn, setDeleteBtn] = useState('deletar');

  async function handleSubmit() {
    if (firstName != '' && lastName != '') {
      updateUser(id, firstName, lastName);
      reload();
    }
  }
  function handleDelete() {
    if (isDelete) {
      deleteUser(id);
      setDeleteBtn('deletar');
    } else {
      setDeleteBtn('confirmar?');
      setIsDelete(true);
    }
  }
  return (
    <>
      <div className={styles.inputContainer}>
        <input
          className={styles.input}
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="nome"
        />
        <input
          className={styles.input}
          placeholder="sobrenome"
          type="text"
          value={lastName}
          onChange={(e) => setlastName(e.target.value)}
        />
      </div>
      <div className={styles.btnContainer}>
        <button className={styles.btnEdit} onClick={() => handleSubmit()}>
          editar
        </button>
        <button className={styles.btnDelete} onClick={() => handleDelete()}>
          {deleteBtn}
        </button>
      </div>
    </>
  );
}
