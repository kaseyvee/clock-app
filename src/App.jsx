import Button from "./components/Button"
import Details from "./components/Details"
import Quote from "./components/Quote"
import Time from "./components/Time"
import { useFetchData } from "./useFetchData"

function App() {
  const data = useFetchData();

  return (
    <main className="App">
      <Quote quote={data.quote} />
      <div className="App_bottom">
        <Time time={data.time} />
        <Button />
      </div>
      {/* <Details /> */}
    </main>
  )
}

export default App
