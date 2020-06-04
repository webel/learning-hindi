import React from "react"

import words from "../data/100mostCommonWords.json"
import LearnLayout from "../components/learnLayout"

const CommonWords = () => {
	return (
		<LearnLayout
			data={words}
			seoTitle="100 most common Hindi words"
		/>
	)
}

export default CommonWords
