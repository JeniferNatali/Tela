import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="left">
        <a href="#logout">Sair</a>
      </div>
      <div className="right">
        <a href="#my-system">
          <span role="img" aria-label="fish">🐟</span> Meu Sistema
        </a>
        <a href="#my-profile">
          <span role="img" aria-label="profile">👤</span> Meu Perfil
        </a>
      </div>
    </header>
  );
};
