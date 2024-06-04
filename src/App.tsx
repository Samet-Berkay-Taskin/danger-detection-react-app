
import './style/index.css'
import Header from './components/header'
import AppRoutes from './routes'

function App() {

  return (
    <div >
      <div>
        <Header />
      </div>
      <div className='flex items-center justify-center mt-12'>
        <AppRoutes />
      </div>
    </div>
  )
}
export default App
