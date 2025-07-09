
import { Button } from './components/ui/Button'
import './App.css'
import { PlusIcon } from './icons/plusicon'

function App() {

  return (
    <>
  <Button startIcon={<PlusIcon />} variant='primary' text='share'/>
  <Button variant='secondary' text='Add Content'/>
    </>
  )
}

export default App
