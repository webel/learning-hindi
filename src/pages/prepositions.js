import React from "react"

import LearnLayout from "../components/learnLayout"
import prepositions from "../data/prepositions.json"

const Prepositions = () => {
	return (
		<LearnLayout
			data={prepositions}
			seoTitle={"Prepositions"}
			flashcardStyle="shortPhrase"
		/>
	)
}

export default Prepositions
