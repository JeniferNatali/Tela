import Link from 'next/link';
import React from 'react';
import './UserInfo.css';

export default function UserInfo ()  {
  return (
    <div className="user-info">
      <h1>Seus dados</h1>
      <div className="user-card">
        <div className="user-details">
          <p><strong>Nome</strong></p>
          <p>XXXXXX</p>
          <p><strong>Email</strong></p>
          <p>XXXXXX</p>
          <p><strong>Telefone celular</strong></p>
          <p>XXXXXX</p>
        </div>
        <div className="edit-icon">
          <span role="img" aria-label="edit">✏️</span>
        </div>
      </div>
      <p><Link href={'/'}>Voltar</Link></p>
    </div>
  );
};
