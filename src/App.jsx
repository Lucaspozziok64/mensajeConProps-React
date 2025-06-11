import './App.css'
import MensajeConProps from './components/MensajeConProps'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  const Mensaje = 'My Friend';

  return (
    <main className='container my-5 text-center text-white'>
      <MensajeConProps mensajeConProps={Mensaje} />
    </main>
  )
}

export default App
