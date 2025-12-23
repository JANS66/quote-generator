import React from "react"
import QuoteBox from "./QuoteBox.jsx"
import CategorySelector from "./CategorySelector.jsx"

function App() {
  const [quote, setQuote] = React.useState({})
  const [category, setCategory] = React.useState(``)

  const fetchQuote = async (category) => {
    try {
      const response = await fetch(`http://api.quotable.io/random?tags=${category}`)
      if (!response.ok) throw new Error(`No quote for this tag`)
      const data = await response.json()
      setQuote(data)
    } catch (error) {
      console.warn(error)
      const fallback = await fetch(`http://api.quotable.io/random`)
      const data = await fallback.json()
      setQuote(data)
    }
  }

  React.useEffect(() => {
    if (category) fetchQuote(category)
  }, [category])

  return (
    <div className="App">
      <CategorySelector category={category} setCategory={setCategory} />
      <QuoteBox quote={quote} />
      <button onClick={() => fetchQuote(category)}>New Quote</button>
    </div>
  )
}

export default App
