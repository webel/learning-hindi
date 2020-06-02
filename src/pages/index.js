import React from "react"

import alphabet from "../data/alphabet.json"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Flashcard from "../components/flashcard"

const keys = Object.keys(alphabet)

const IndexPage = () => (
	<Layout>
		<SEO title="Vowels" />
		{keys.map(key => (
			<Flashcard letter={key} word={alphabet[key]["word"]} key={key} />
		))}
	</Layout>
)

export default IndexPage
