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
				<Text
					sx={{
						fontSize: "smaller",
						color: "purple",
						textAlign: "center",
						backgroundColor: "moreMuted",
						zIndex: 999,
					}}
				>
					{smallText}
				</Text>
			)}
		</Card>
	)
}

export const WordFlashCard = ({
	item,
	onTopClick = false,
	onBottomClick = false,
	showDetails = false,
	smallText = false,
	phrase,
	render,
	...props
}) => {
	const [showMore, setShowMore] = useState(false)
	const [showSmallText, setShowSmallText] = useState(false)

	const defaultOnBottomClick = () => {
		if (props.single) {
			setShowMore(!showMore)
			if (onBottomClick) {
				onBottomClick(item)
			}
		} else {
			setShowSmallText(!showSmallText)
			if (onBottomClick) {
				onBottomClick(item)
			}
		}
	}

	const variant = phrase ? "phraseFlashCard" : "flashCard"

	const flashCardProps = {
		mainText: item.hindi,
		onTopClick: onTopClick ? onTopClick : () => speakThisHindi(item.hindi),
		onBottomClick: defaultOnBottomClick,
		showSmallText: showSmallText,
		smallText: smallText ? smallText(item) : item.english,
		variantTheme: variant,
	}

	if (showDetails) {
		return (
			<>
				<CommonFlashcard {...flashCardProps} />
				{render && render()}
				{showMore && showDetails({ ...item })}
			</>
		)
	}
	return <CommonFlashcard {...flashCardProps} />
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
