import React, { useState } from "react"

import words from "../data/100mostCommonWords.json"

import Layout from "../components/layout"
import LearnLayout from "../components/learnLayout"

import SEO from "../components/seo"
import { WordFlashCard } from "../components/flashcard"


const CommonWords = () => {
	const [flashCardView, setFlashCardView] = useState(false)

	function doubleClick() {
		setFlashCardView(!flashCardView)
	}

	if (flashCardView) {
		return (
			<LearnLayout
				doubleClick={doubleClick}
				seoTitle="100 Most Common Hindi Words"
				data={words}
				maxIndex={words.length}
			/>
		)
	}

	return (
		<Layout doubleClick={doubleClick}>
			<SEO title="100 Most Common Hindi Words" />
			{words.map(word => (
				<WordFlashCard key={word.number} {...word} />
			))}
		</Layout>
	)
}

export default CommonWords
