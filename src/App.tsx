import { Sidebar } from './components/Sidebar'
import { ContentTest } from './components/ContentTest'
import './styles/global.css'

function App() {
  return (
    <div className="App">
      <div className='block'>
        <Sidebar />
        <ContentTest />
      </div>
    </div>
  )
}

export default App
