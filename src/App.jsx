import Button from "./components/Button"
import Details from "./components/Details"
import Quote from "./components/Quote"
import Time from "./components/Time"
import { useFetchData } from "./useFetchData"

function App() {
  const data = useFetchData();

  return (
    <main className="App">
      {data.length > 0 ? <>
        <Quote quote={data[1]} />
        <div className="App_bottom">
          <Time time={data[0]} />
          <Button />
        </div>
        {/* <Details /> */}
      </>
      :
      <span>loading...</span>}
    </main>
  )
}

export default App
