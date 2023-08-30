'use client';
import styles from './styles.module.css';

import type { RootState } from '@/app/GlobalRedux/store';
import { useDispatch, useSelector } from 'react-redux';
import { toogleOFF } from '@/app/GlobalRedux/Features/counter/counterSlice';
import UpdateModal from '../UpdateModal/UpdateModal';
import Input from '../Input/Input';

import { deleteUserByID } from '@/app/libs/Controller';

import { useRouter } from 'next/navigation';
import React from 'react';

export default function Modal() {
  const router = useRouter();
  const { id, isToogle } = useSelector(
    (state: RootState) => state.toogleUpdate
  );

  function reload() {
    dispatch(toogleOFF());
    router.refresh();
  }
  function deleteUser(id: string) {
    deleteUserByID(id);
    dispatch(toogleOFF());
    router.refresh();
  }
  const dispatch = useDispatch();
  return (
    <>
      {isToogle && (
        <div className={styles.modal}>
          <div className={styles.modalContainer}>
            <div className={styles.modalHeader}>
              <button
                className={styles.btn}
                onClick={() => dispatch(toogleOFF())}
              >
                X
              </button>
            </div>

            <UpdateModal id={id} />
            <Input id={id} reload={reload} deleteUser={deleteUser} />
          </div>
        </div>
      )}
    </>
  );
}
