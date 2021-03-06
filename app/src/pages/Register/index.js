import React, { useState } from 'react'
import './styles.css'
import Logo from '../../assets/logo.svg'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import api from '../../services/api'

function Register () {
  const history = useHistory();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');
  
  async function handleRegister (event) {
    event.preventDefault();

    const data = {
      name,
      email,
      whatsapp,
      city,
      uf
    };

    
    try {
      const response = await api.post('ongs', data)
      alert(`Seu ID de acceso é: ${response.data.id}`)
      history.push('/')
    } catch (err) {
      alert(`Erro ao cadastrar ONG, tente novamente`)
    }

  };

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={Logo} alt="Be the hero"/>

          <h1>Cadastro</h1>
          <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrar casos da sua ONG.</p>

          <Link className='back-link' to="/">
            <FiArrowLeft size={16} color="#e02041" />
            Não tenho cadastro
          </Link>
        </section>

        <form onSubmit={handleRegister}>
          <input 
            type='text'
            placeholder='Nome da ONG'
            value={name}
            onChange={ event => setName(event.target.value) }
          />
          <input 
            type="email" 
            placeholder="E-mail"
            value={email}
            onChange={event => setEmail(event.target.value) }
          />
          <input 
            type="text"
            placeholder="Whatsapp"
            value={whatsapp}
            onChange={ event => setWhatsapp(event.target.value) }
          />

          <div className="input-group">
            <input 
              type="text" 
              placeholder="Cidade"
              value={city}
              onChange={ event => setCity(event.target.value) }
            />
            <input 
              type="text" 
              placeholder="UF" 
              style={{ width: 80 }}
              value-={uf}
              onChange={ event => setUf(event.target.value) }
            />
          </div>

          <button className="button">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
