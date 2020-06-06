import React from "react"
/** @jsx jsx */
import { Card, Text, jsx } from "theme-ui"

function speakThisHindi(text) {
	const utterance = new SpeechSynthesisUtterance(text)
	utterance.rate = 0.5
	utterance.lang = "hi"
	speechSynthesis.speak(utterance)
}

const ClickableText = ({ text }) => (
	<div
		sx={{
			px: "5px",
			backgroundColor: "muted",
			boxShadow: "0 0 8px rgba(0, 0, 0, 0.125)",
			display: "inline-block",
			cursor: "pointer",
		}}
		onClick={() => speakThisHindi(text)}
	>
		{text}
	</div>
)

export const iastEnglishDetails = ({ english, iast }) => {
	return (
		<>
			{iast && <Text my={20}>{iast}</Text>}
			<Text mb={20} variant="caps">
				{english}
			</Text>
		</>
	)
}

export const letterDetails = ({ english, iast, word, soundsLike }) => (
	<>
		{iast && <Text my={20}>{iast}</Text>}
		{(word || english) && (
			<div>
				<ClickableText text={word} />
				{" - "}
				<Text mb={20} variant="caps" css={{ display: "inline-block" }}>
					{english}
				</Text>
			</div>
		)}
		{soundsLike && <Text mb={20}>{soundsLike}</Text>}
	</>
)
