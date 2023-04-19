import Button from "./components/Button"
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
    </main>
  )
}

export default App
