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

export const WordFlashCard = ({ hindi, english, iast = false, key }) => (
  <Card variant="flashCard">
    <ClickableArea tabIndex={key} onClick={() => speakThisHindi(hindi)} />
    <ClickableArea tabIndex={key} onClick={() => speakThisEnglish(english)} />
    <Text css={{ position: "absolute" }} variant="flashCard">
      {hindi}
    </Text>
  </Card>
)

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
