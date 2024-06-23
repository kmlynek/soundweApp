import React from 'react';
import googleImg from '../assets/google.png';
import facebookImg from '../assets/facebook.png';
import { Image } from 'react-bootstrap';
import "./Login.css"

const LoginBtn = () => {
  return (
    <div className='btnLogin'>
      <button className="btn btn-outline-secondary w-100 mb-3" style={{ backgroundColor: 'white', color: 'black' }}>
        <Image src={googleImg} style={{ maxWidth: '30px', marginRight: '10px' }} />{' '}
        <small>Kontynuuj przy użyciu konta Google</small>
      </button>
      <button className="btn btn-outline-secondary w-100 mb-3" style={{ backgroundColor: 'white', color: 'black' }}>
        <Image src={facebookImg} style={{ maxWidth: '30px', marginRight: '10px' }} />{' '}
        <small>Kontynuuj przy użyciu konta Facebook</small>
      </button>
      <div class="position-relative">
        <hr class="divider" />
        <div class="divider-content-center">lub</div>
      </div>
    </div>
    
  );
}

export default LoginBtn;
