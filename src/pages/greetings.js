import React from "react"

import LearnLayout from "../components/learnLayout"
import greetings from "../data/greetings.json"

const Greetings = () => {
	return (
		<LearnLayout
			data={greetings}
			seoTitle={"Greetings"}
			phrase
		/>
	)
}

export default Greetings
