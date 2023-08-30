'use client';
import styles from './styles.module.css';
import { useDispatch } from 'react-redux';
import {
  toogleON,
  saveID
} from '@/app/GlobalRedux/Features/counter/counterSlice';

type ComponentProps = {
  id: string;
};

export default function InfoButton({ id }: ComponentProps) {
  const dispatch = useDispatch();

  function handleEdit(id: string) {
    dispatch(toogleON());
    dispatch(saveID(id));
  }
  return (
    <div className={styles.button} onClick={() => handleEdit(id)}>
      <span>INFO</span>
    </div>
  );
}
