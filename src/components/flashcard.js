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
		sx={{
			zIndex: 999,
			height: "50%",
			width: "100%",
			"&:hover": { cursor: "pointer" },
		}}
	/>
)

export const CommonFlashcard = ({
	mainText,
	onTopClick,
	onBottomClick,
	smallText,
	showSmallText,
	variantTheme = "flashCard",
}) => {
	return (
		<Card variant={variantTheme}>
			<ClickableArea tabIndex={`top-${mainText}`} onClick={onTopClick} />
			<ClickableArea tabIndex={`bottom-${mainText}`} onClick={onBottomClick} />
			<Text variant={variantTheme}>{mainText}</Text>
			{showSmallText && (
				<Text sx={{ fontSize: "smaller", color: "purple" }}>{smallText}</Text>
			)}
		</Card>
	)
}

export const WordFlashCard = ({
	hindi,
	english,
	iast = false,
	onTopClick = false,
	onBottomClick = false,
	showIastEnglishDetails = false,
	showDetails = false,
	smallTextKey = false,
	phrase,
	...props
}) => {
	const [showMore, setShowMore] = useState(false)
	const [showEnglish, setShowEnglish] = useState(false)

	const defaultOnBottomClick = () => {
		if (showIastEnglishDetails) {
			setShowMore(!showMore)
		} else {
			// TODO: should be setSmallText or setUnderText
			setShowEnglish(!showEnglish)
		}
	}

	const variant = phrase ? "phraseFlashCard" : "flashCard"

	const flashCardProps = {
		mainText: hindi,
		onTopClick: onTopClick ? onTopClick : () => speakThisHindi(hindi),
		onBottomClick: onBottomClick
			? () => onBottomClick.func(props[onBottomClick.key])
			: defaultOnBottomClick,
		showSmallText: showEnglish,
		smallText: props[smallTextKey] || english,
		variantTheme: variant,
	}

	if (showDetails) {
		return (
			<>
				<CommonFlashcard {...flashCardProps} />
				{showMore && showDetails}
			</>
		)
	}
	return (
		<>
			<CommonFlashcard {...flashCardProps} />
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
