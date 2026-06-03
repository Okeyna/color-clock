import { format } from "date-fns";

function App() {

  return (
    <div className="App">
      <p>Date: {format(new Date(), 'yyyy-MM-dd HH:mm:ss')}</p>
    </div>
  )
}

export default App
