import React, { useState, useEffect } from 'react';
import api from './api';
import FormBusca from './components/form-busca';


export default function App() {
  const [repositories, setRepositories] = useState([]);

  useEffect(async () => {
    // const getRepositories = await fetch('https://api.github.com/users/jusansilva/repos');
    const repo = await api.get('/users/jusansilva/repos');
    setRepositories(repo.data);
  }, []);

  function goFavority(id) {
    const newRepositories = repositories.map(resp => {
      return resp.id === id ? { ...resp, favorite: !resp.favorite } : resp
    })
    setRepositories(newRepositories);
  }
  return (
    <FormBusca />
  
  );
}

