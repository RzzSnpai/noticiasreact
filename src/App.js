import React, { Component } from 'react';
import Header from './components/Header';
import Noticias from './components/Noticias';
import Formulario from './components/Formulario';

class App extends Component {

  state={
    noticias : []
  }

  componentDidMount(){
    this.consultarNoticias();

  }

  consultarNoticias= (categoria = 'general') =>{
    //console.log(categoria);
    let url= `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=478eda3b1a3f40b8a5aa88c735e83c34`;

    fetch(url)
    .then(respuesta =>{
      return respuesta.json();
    })
    .then(noticias =>{
      this.setState({
        noticias: noticias.articles
      })
    })









  }


  render() {
    return (
      <div className="contenedor-app">
        <Header
          titulo='Noticias'
        />

        <div className="container white contenedor-noticias">
          <Formulario 
            consultarNoticias= {this.consultarNoticias}
          />
          <Noticias
            noticias={this.state.noticias}
          />
        </div>
        
      </div>
    );
  }
}

export default App;
