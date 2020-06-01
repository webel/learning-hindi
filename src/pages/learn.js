import React from "react"
import LearnLayout from "../components/learnLayout"

import commonWords from "../data/100mostCommonWords.json"

const first_twenty = commonWords.slice(0, 20)

const Learn = () => {
	return <LearnLayout data={first_twenty} maxIndex={20} />
}

export default Learn
