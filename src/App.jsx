import Button from "./components/Button"
import Details from "./components/Details"
import Quote from "./components/Quote"
import Time from "./components/Time"

function App() {
  return (
    <main className="App">
      <Quote />
      <div className="App_bottom">
        <Time />
        <Button />
      </div>
      <Details />
    </main>
  )
}

export default App
