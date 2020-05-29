import React from "react"

import words from "../data/100mostCommonWords.json"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { WordFlashCard } from "../components/flashcard"

// const keys = Object.keys(words)

const IndexPage = () => (
	<Layout>
		<SEO title="100 Most Common Hindi Words" />
		{words.map(word => (
			<WordFlashCard key={word.number} {...word} />
		))}
	</Layout>
)

export default IndexPage
