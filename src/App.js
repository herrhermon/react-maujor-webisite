// import React,{Fragment} from 'react';
import React from 'react'
import Principal from './components/Principal';
import Rodape from './components/Rodape';
import Topo from './components/Topo';


function App() {
  return (
    // <Fragment>
    //Tem o mesmo valor de fragment
    <>

    {/* <header className="topo">
      <h1 className='logo'></h1>
      <ul>
        <li><a href="">Navegação</a></li>
      </ul>
    </header>
    
    <main className ="principal">
      <h2>Ultimos Lançamentos</h2>
      <div clasName="card">Card</div>
    </main>
    <footer className="rodape">
      <p> Conteudos cedidos pela editora Novatec &#8212; Copyright 2020 </p>
    </footer> */}

    {/* Codigo acima até o passo 2 */}

    <Topo />
    <Principal />
    <Rodape />
  

    </>

    // </Fragment>
  );
}

export default App;