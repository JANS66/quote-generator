import React from "react"

export default function CategorySelector(properties) {
    const [tags, setTags] = React.useState([])

    React.useEffect(() => {
        const fetchTags = async () => {
            try {
                const response = await fetch(`http://api.quotable.io/tags`)
                const data = await response.json()
                setTags(data.filter(tag => tag.quoteCount > 1))
            } catch (error) {
                console.error(`Failed to fetch tags:`, error)
                setTags([])
            }
        }

        fetchTags()
    }, [])

    React.useEffect(() => {
        if (tags.length > 0 && !properties.category) properties.setCategory(tags[0].name)
    }, [tags])

    return (
        <select value={properties.category} onChange={(event) => properties.setCategory(event.target.value)}>
            {tags.map(tag => (
                <option key={tag._id} value={tag.name}>
                    {tag.name}
                </option>
            ))}
        </select>
    )
}