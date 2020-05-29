import React, { useState } from "react"

/** @jsx jsx */
import { Button, Checkbox, Label, jsx } from "theme-ui"
import { WordFlashCard } from "../components/flashcard"
import Layout from "../components/layout"

import commonWords from "../data/100mostCommonWords.json"

const first_twenty = commonWords.slice(0, 20)

function randomIndex(maxIndex) {
	return Math.floor(Math.random() * maxIndex)
}

const Learn = () => {
	const initial_index = randomIndex(20)
	const [word, setWord] = useState(first_twenty[initial_index])

	const getNextWord = () => {
		const index = randomIndex(20)
		setWord(first_twenty[index])
	}

	return (
		<Layout flexDirection="column">
			<WordFlashCard {...word} showDetails />
			<Button
				sx={{ backgroundColor: "highlight", fontSize: "small" }}
				onClick={getNextWord}
			>
				Next
			</Button>
			{/* <Label>
                <Checkbox css={{ width: "fitContent", alignSelf: "flexEnd" }} />{" "}
                <span>20 Most Common</span>
            </Label> */}
		</Layout>
	)
}

export default Learn
