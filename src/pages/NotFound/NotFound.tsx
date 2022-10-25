import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
        <h1>Página não encontrada</h1>
        <Link to='/'>Voltar para a home</Link>
    </>
  )
}

export default NotFound