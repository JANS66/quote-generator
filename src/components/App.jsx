import React, { useEffect, useState } from "react"
import QuoteBox from "./QuoteBox.jsx"
import CategorySelector from "./CategorySelector.jsx"

function App() {
  const [quote, setQuote] = useState({})
  const [category, setCategory] = useState(`inspirational`)

  const fetchQuote = async (category) => {
    const response = await fetch(`https://api.quotable.io/random?tags=${category}`)
    const data = await response.json()
    setQuote(data)
  }

  useEffect(() => {
    fetchQuote(category)
  }, [category]) 

  return (
    <div className="App">
      <CategorySelector category={category} setCategory={setCategory} />
      <QuoteBox quote={quote}/>
      <button onClick={() => fetchQuote(category)}>New Quote</button>
    </div>
  )
}

export default App
