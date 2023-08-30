import Image from 'next/image';

import styles from './styles.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        {' '}
        <Image
          src={`/assets/logo.svg`}
          width={80}
          height={80}
          alt="Foto do usuário"
          priority
        />
        <h1 className={styles.listTitle}>CLUBE DO MONTANHISTA</h1>
      </div>
      <div className={styles.login}>
        <a href="#">minha conta</a>
        <a href="#">cadastro</a>
      </div>
    </header>
  );
}
