import React from "react"
import LearnLayout from "../components/learnLayout"

import commonWords from "../data/100mostCommonWords.json"

const Learn = () => {
	return (
		<LearnLayout
			seoTitle={"Common Words"}
			data={commonWords}
			maxIndex={20}
		/>
	)
}

export default Learn
