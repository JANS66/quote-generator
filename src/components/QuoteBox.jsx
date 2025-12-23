export default function QuoteBox(properties) {
    return (
        <div className="quote-box">
            <p>"{properties.quote.content}"</p>
            <p>- {properties.quote.author}</p>
        </div>
    )
}