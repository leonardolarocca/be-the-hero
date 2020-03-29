import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import api from '../../services/api'

import { FiArrowLeft } from 'react-icons/fi'

import Logo from '../../assets/logo.svg'
import './styles.css'

function Incident () {

  const ongId = localStorage.getItem('ongId');
  const history = useHistory();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  
  async function handleNewIncident (event) { 
    event.preventDefault()

    const incident = {
      title,
      description,
      value
    };

    try {
      await api.post('incidents', incident, {
        headers: {
          Authorization: ongId
        }
      })

      history.push('/profile')
    } catch (err) {
      alert('Erro ao cadastrar, tente novamente');
    }
  }

  return (
<div className="incident-container">
      <div className="content">
        <section>
          <img src={Logo} alt="Be the hero"/>

          <h1>Cadastrar novo caso</h1>
          <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

          <Link className='back-link' to="/">
            <FiArrowLeft size={16} color="#e02041" />
            Voltar para home
          </Link>
        </section>

        <form onSubmit={handleNewIncident}>
          <input 
            type="text" 
            placeholder='Título do caso'
            value={title}
            onChange={ event => setTitle(event.target.value)}
          />
          <textarea 
            placeholder="Descrição"
            value={description}
            onChange={ event => setDescription(event.target.value)}
          ></textarea>
          <input 
            type="text" 
            placeholder="Valor em reais"
            value={value}
            onChange={ event => setValue(event.target.value)}
          />

          <button className="button">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}

export default Incident;
