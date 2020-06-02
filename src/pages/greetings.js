import React from "react"

import LearnLayout from "../components/learnLayout"

import greetings from "../data/greetings.json"

const Greetings = () => {
	return (
		<LearnLayout
			seoTitle={"Greetings"}
			data={greetings}
			maxIndex={greetings.length}
			phrase
		/>
	)
}

export default Greetings
