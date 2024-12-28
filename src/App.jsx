import './App.css'
import NavBar from './components/NavBar'
import ItemsListContainer from './components/ItemsListContainer'

function App() {
  return (
    <>
      <header>
        <NavBar></NavBar>
      </header>
      <main>
        <ItemsListContainer greeting="Bienvenidos a Harmony"></ItemsListContainer>
      </main>
    </>
  )
}

export default App
