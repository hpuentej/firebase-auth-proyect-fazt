import {Component} from 'react'

class Reloj extends Component { 
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount() {
    console.log(1," COMPONENT DID MOUNT HIJO, se ejecuta inmediatamente después del primer renderizado")
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(2, "COMPONENT DID UPDATE HIJO, se ejecuta inmediatamente después de cada actualización, excepto la primera vez")
  }

  componentWillUnmount() {
    console.log(3, "COMPONENT WILL UNMOUNT HIJO, se ejecuta antes de que el componente sea eliminado del DOM")
    //clearInterval(this.temporizador)
  }
  
  render() {
    console.log(4, "RENDER-HIJO, React DOM compara el elemento actual con el anterior y solo aplica en el DOM real las actualizaciones necesarias") 
    return (
      <h1>{this.props.hora}</h1>
    )
  }
}


export class Ejemplo2 extends Component {
  constructor(props) {
    super(props)
    console.log(0, "CONSTRUCTOR, inicializa el state")
    this.state = {
      hora: new Date().toLocaleTimeString(),
      visible: false
    }
    
    this.temporizador = null
  }

  componentDidMount() {
    console.log(1," COMPONENT DID MOUNT, se ejecuta inmediatamente después del montaje")
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(2, "COMPONENT DID UPDATE, se ejecuta inmediatamente después de cada actualización")
    console.log('Props previas',prevProps)
    console.log('Props actuales',this.props)
    console.log('State previas',prevState)
    console.log('State actuales',this.state)
  }

  tictac = () => {
    this.temporizador = setInterval(() => {
      this.setState({
        hora: new Date().toLocaleTimeString(),
      })
    }, 2000)

  }

  iniciar = () => {
    this.tictac()
    this.setState({
      visible: true
    })
  }

  detener = () => {
    clearInterval(this.temporizador)
    this.setState({
      visible: false
    })
  }


  render() {
    console.log(4, "RENDER, React DOM compara el elemento actual con el anterior y solo aplica las actualizaciones necesarias en el DOM real") 
    return (
      <>
        <h1>Ciclo de vida en React</h1>
        {this.state.visible? <Reloj hora={this.state.hora}/> : <h1>Aquí irá el Reloj</h1>}
        <button onClick = {this.iniciar}>Iniciar</button>
        <button onClick = {this.detener}>Detener</button>
      </>
    )
  }
}