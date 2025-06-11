import './App.css'
import MensajeConProps from './components/MensajeConProps'

function App() {

  const Mensaje = 'My Friend';

  return (
    <main>
      <MensajeConProps mensajeConProps={Mensaje} />
    </main>
  )
}

export default App
