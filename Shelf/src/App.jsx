import { useState } from 'react'
import ViewSwitch from './components/ViewSwitch/ViewSwitch.jsx'
import ShelfScreen from './components/ShelfScreen/ShelfScreen.jsx'
import StatsScreen from './components/StatsScreen/StatsScreen.jsx'

function App() {
  const [page, setPage] = useState('shelf')
 
  
  return (
    <>
      <ViewSwitch page={page} setPage={setPage} />

      <main className="page-area">
                    {page === 'shelf' && <ShelfScreen />}
                    {page === 'stat' && <StatsScreen />}
      </main>
    </>
  )
}

export default App
