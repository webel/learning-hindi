import React from "react"

import vowels from "../data/vowels.json"
import consonants from "../data/consonants.json"

import LearnLayout from "../components/learnLayout"

function speakThisHindi(text) {
	const utterance = new SpeechSynthesisUtterance(text)
	utterance.rate = 0.5
	utterance.lang = "hi"
	speechSynthesis.speak(utterance)
}

const alphabet = vowels.concat(consonants)

const Devanagari = () => (
	<LearnLayout
		data={alphabet}
		seoTitle={"Devanagari Vowels"}
		smallTextKey="soundsLike"
		// onBottomClick={{
		// 	key: 'word',
		// 	func: speakThisHindi
		// }}
	/>
)

export default Devanagari
