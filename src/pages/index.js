import React from "react"

import vowels from "../data/vowels.json"
import consonants from "../data/consonants.json"

import { letterDetails } from "../components/detailsUnderFlashcard"
import LearnLayout from "../components/learnLayout"

function speakThisHindi(text) {
	const utterance = new SpeechSynthesisUtterance(text)
	utterance.rate = 0.5
	utterance.lang = "hi"
	speechSynthesis.speak(utterance)
}

const alphabet = vowels.concat(consonants)

const onBottomClick = item => speakThisHindi(item.word)
const smallText = item => (
	<>
		{item.word} {item.word && item.english && ' - '} {item.english} <br /> {item.soundsLike}
	</>
)

const Devanagari = () => (
	<LearnLayout
		data={alphabet}
		seoTitle={"Devanagari Vowels"}
		showDetails={letterDetails}
		smallText={smallText}
		onBottomClick={onBottomClick}
	/>
)

export default Devanagari
