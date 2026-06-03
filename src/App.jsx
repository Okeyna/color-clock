import { useState } from 'react'
import { format } from "date-fns";


function App() {
  const [date, setDate] = useState(format(new Date(), 'yyyy-MM-dd HH:mm:ss'));

  setInterval(() => {
    setDate(format(new Date(), 'yyyy-MM-dd HH:mm:ss'))
  }, 1000);

  return (
    <div className="App">
      <p>Date: {date}</p>
    </div>
  )
}

export default App
