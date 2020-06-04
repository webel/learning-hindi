import React from "react"

import LearnLayout from "../components/learnLayout"

import helpDirections from "../data/helpDirections.json"

const HelpDirections = () => {
	return (
        <LearnLayout
            seoTitle={"Help & Directions"}
			data={helpDirections}
			phrase
		/>
	)
}

export default HelpDirections
