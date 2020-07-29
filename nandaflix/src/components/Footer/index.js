import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assent/img/Logo.png';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.youtube.com/watch?v=HJ7UTMcByBI">
        <img className="Logo" src={Logo} alt="Logo Nandaflix" />
      </a>
      <p>
        Orgulhosamente criado por
        {' '}
        <a href="https://github.com/fernandaqueirozbc">
          Fernanda
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
