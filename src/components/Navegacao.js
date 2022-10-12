import React from 'react'
import {Link} from 'react-router-dom'
let linkCorrente = {
  color:"#027399"
};

function Navegacao() {
  return (
    <ul>
      <li>
      <Link to="/">Home</Link>
      </li>
      <li>
      <Link to="/frontend">Frontend</Link>
      </li>
      <li>
      <Link to="/programacao">Programação</Link>
      </li>
      <li>
      <Link to="/design">Design</Link>
      </li>
      <li>
      <Link to="/catalogo">Catalogo</Link>
      </li>
    </ul>
  )
}

export default Navegacao