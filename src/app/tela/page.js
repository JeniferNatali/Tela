import Link from 'next/link';
import React from 'react';
import Header from '@/componentes/cabecalho/Header';
import UserInfo from '@/componentes/cabecalho/UserInfo';


export default function Seusdados ()  {
  return (
    <div className="user-info">
        <Header />
        <UserInfo />
     {/* <h1>Seus dados</h1>
      <div className="user-card">
        <div className="user-details">
        <div>
            <span>Nome <br /></span>
          <input /></div>
          <p><strong>Email</strong></p>
          <p>XXXXXX</p>
          <p><strong>Telefone celular</strong></p>
          <p>XXXXXX</p>
        </div>
        <div className="edit-icon">
          <span role="img" aria-label="edit">✏️</span>
        </div>
      </div>
      <p><Link href={'/'}>Voltar</Link></p>*/}
    </div>
  );
};
