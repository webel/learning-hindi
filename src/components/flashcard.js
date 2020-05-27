/** @jsx jsx */
import { Card, Text, jsx } from "theme-ui"

function speakThis(text) {
  const utterance = new SpeechSynthesisUtterance(text)
  utterance.rate = 0.5
  utterance.lang = "hi"
  speechSynthesis.speak(utterance)
}

const ClickableArea = ({ onClick }) => (
  <div
    onClick={onClick}
    sx={{ height: "50%", width: "100% " }}
  />
)

const Flashcard = ({ letter, word }) => (
  <Card variant="flashCard">
    <ClickableArea onClick={() => speakThis(letter)} />
    <ClickableArea onClick={() => speakThis(word)} />
    <Text css={{ position: "absolute" }} variant="flashCard">
      {letter}
    </Text>
  </Card>
)

export default Flashcard;