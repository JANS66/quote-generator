import React from "react"

export default function CategorySelector(properties) {
    const categories = [`inspirational`, `wisdom`, `love`, `funny`]

    return (
        <select value={properties.category} onChange={(event) => properties.setCategory(event.target.value)}>
            {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
            ))}
        </select>
    )
}