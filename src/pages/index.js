import React from "react"

import vowels from "../data/vowels.json"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Flashcard from "../components/flashcard"

const Devanagari = () => (
	<Layout>
		<SEO title="Vowels" />
		{vowels.map(vowel => (
			<Flashcard letter={vowel.hindi} word={vowel.word} key={vowel} />
		))}
	</Layout>
)

export default Devanagari
