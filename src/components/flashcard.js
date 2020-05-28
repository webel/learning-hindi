/** @jsx jsx */
import { Card, Text, jsx } from "theme-ui"

function speak(utterance) {
  utterance.rate = 0.5
  utterance.lang = "hi"
  speechSynthesis.speak(utterance)
}

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

const ClickableArea = ({ onClick }) => (
  <div onClick={onClick} sx={{ height: "50%", width: "100% " }} />
)

export const WordFlashCard = ({ hindi, english, iast = false }) => (
         <Card
           css={{ width: [200, 180, 150], height: [200, 180, 150] }}
           variant="flashCard"
         >
           <ClickableArea onClick={() => speakThisHindi(hindi)} />
           <ClickableArea onClick={() => speakThisEnglish(english)} />
           <Text css={{ position: "absolute" }} variant="flashCard">
             {hindi}
           </Text>
         </Card>
       )

const Flashcard = ({ letter, word }) => (
  <Card variant="flashCard">
    <ClickableArea onClick={() => speakThisHindi(letter)} />
    <ClickableArea onClick={() => speakThisHindi(word)} />
    <Text css={{ position: "absolute" }} variant="flashCard">
      {letter}
    </Text>
  </Card>
)

export default Flashcard
