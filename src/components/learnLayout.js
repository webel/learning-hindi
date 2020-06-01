import React, { useState } from "react"

/** @jsx jsx */
import { Button, Checkbox, Label, jsx } from "theme-ui"
import { WordFlashCard } from "../components/flashcard"
import Layout from "../components/layout"

function randomIndex(maxIndex) {
	return Math.floor(Math.random() * maxIndex)
}

const LearnLayout = ({ data, maxIndex, ...props }) => {
	const initial_index = randomIndex(maxIndex)
	const [item, setItem] = useState(data[initial_index])

	const getNextItem = () => {
		const index = randomIndex(data.length)
		setItem(data[index])
	}

	return (
		<Layout flexDirection="column">
            <WordFlashCard {...item} showDetails {...props } />
			<Button
				sx={{ backgroundColor: "highlight", fontSize: "small" }}
				onClick={getNextItem}
			>
				Next
			</Button>
		</Layout>
	)
}

export default LearnLayout
