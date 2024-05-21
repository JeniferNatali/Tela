import React from 'react';
import styles from './index.module.css'; 

export default function Header() {
  return (
    <header className="header">
         <main style={{ marginTop: '10px' }}></main>
        <div className={styles.header}></div>
      <div className="left">
      <div className={styles.header .left}></div>
        <a href="#logout">Sair</a>
      </div>
      <div className="right">
      <div className={styles.header .right}>
        <a href="#my-system">Meus Sistemas</a>
        <a href="#my-profile">Meu Perfil</a>
        </div>
      </div>
    </header>
  );
};