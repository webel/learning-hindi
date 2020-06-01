import React, { useState } from "react"
/** @jsx jsx */
import { Card, Text, jsx } from "theme-ui"

function speakThisHindi(text) {
	const utterance = new SpeechSynthesisUtterance(text)
	utterance.rate = 0.5
	utterance.lang = "hi"
	speechSynthesis.speak(utterance)
}

function speakThisEnglish(text) {
	const utterance = new SpeechSynthesisUtterance(text)
	utterance.rate = 0.5
	utterance.lang = "en"
	speechSynthesis.speak(utterance)
}

const ClickableArea = ({ onClick, tabIndex }) => (
	<div
		onClick={onClick}
		onKeyDown={onClick}
		role="button"
		tabIndex={tabIndex}
		sx={{ height: "50%", width: "100% " }}
	/>
)

export const WordFlashCard = ({
	hindi,
	english,
	iast = false,
	key,
	showDetails = false,
	width,
}) => {
	const [showMore, setShowMore] = useState(false)
	const [showEnglish, setShowEnglish] = useState(false)

	const onBottomClick = () => {
		if (showDetails) {
			setShowMore(!showMore)
		} else {
			// speakThisEnglish(english)
			setShowEnglish(!showEnglish)
		}
	}

	return (
		<>
			<Card css={{ minWidth: width }} variant="flashCard">
				<ClickableArea tabIndex={key} onClick={() => speakThisHindi(hindi)} />
				<ClickableArea tabIndex={key} onClick={onBottomClick} />
				<Text css={{ position: "absolute" }} variant="flashCard">
					{hindi}
				</Text>
				{showEnglish && (
					<Text sx={{ fontSize: "smaller", color: "purple" }}>{english}</Text>
				)}
			</Card>
			{showMore && (
				<>
					{iast && <Text my={20}>{iast}</Text>}
					<Text mb={20} variant="caps">
						{english}
					</Text>
				</>
			)}
		</>
	)
}

const Flashcard = ({ letter, word, key }) => (
	<Card variant="flashCard">
		<ClickableArea tabIndex={key} onClick={() => speakThisHindi(letter)} />
		<ClickableArea tabIndex={key} onClick={() => speakThisHindi(word)} />
		<Text css={{ position: "absolute" }} variant="flashCard">
			{letter}
		</Text>
	</Card>
)

export default Flashcard
