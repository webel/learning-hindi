import React, { useState } from "react"
/** @jsx jsx */
import { Card, Container, Text, jsx } from "theme-ui"

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
}) => {
  const [showMore, setShowMore] = useState(false)

  const onBottomClick = () => {
    speakThisEnglish(english)
    if (showDetails) {
      setShowMore(true)
    }
  }

  return (
    <>
      <Card variant="flashCard">
        <ClickableArea tabIndex={key} onClick={() => speakThisHindi(hindi)} />
        <ClickableArea tabIndex={key} onClick={onBottomClick} />
        <Text css={{ position: "absolute" }} variant="flashCard">
          {hindi}
        </Text>
      </Card>
      {showMore && <>
        {iast && <Text my={20}>{iast}</Text>}
        <Text variant="caps">{english}</Text>
      </>}
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
