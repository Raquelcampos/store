import React, {Component} from 'react';
import "./App.css"
import Celular from './img/celular.jpg'
import Tablet from './img/tablet.jpg'
import Notebook from './img/notebook.jpg'




export default class App extends Component{
  state = {
    numero:0,
    produtos:[
      {
      nome: "Celular",
      img:Celular,
    },{
      nome: "Tablet",
      img:Tablet,
    },{
      nome: "Notebook",
      img:Notebook,
    }
    ]
  }
  acrescentar = () => {
     if(this.state.numero <= 9){
      this.setState({
        numero:this.state.numero+1
       })
        }
  
   }
    descontar = () => {
      if(this.state.numero >= 1){
       this.setState({
          numero:this.state.numero-1
         })
         }
    }
render(){
  return(
    <div>
      <header>
        <h3>My Online Store</h3>
        <ul className='menu'>
          <li className='menuClik'>HOME</li>
          <li className='menuClik'>ABOUT</li>
          <li className='menuClik'>CONTACT</li>
        </ul>
      </header>
      <h1>Store</h1>
      <div className='linha'></div>
      <section className='box1'> 
      {this.state.produtos.map((item) => (
          <section className='box2'> 
            <img src={item.img} alt="Imagem"/>
                <ul className='itens'>
                  <li>{item.nome}</li>
                  <li>{this.state.numero} ítens adicionados</li>
                </ul>
               
            <section className='btn'>
                <button onClick={this.acrescentar} className='soma'>Adicionar</button>
                <button onClick={this.descontar}className='subtrai'>Remover</button>
            </section> 
          </section>
        ))}
         </section> 
       
     
    </div>

  )
}
}
