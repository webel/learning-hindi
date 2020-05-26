import React from "react"
import { Link } from "gatsby"
/** @jsx jsx */
import { Card, Text, jsx } from "theme-ui"

import alphabet from "../data/alphabet.json"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

function speakThis(text) {
  const utterance = new SpeechSynthesisUtterance(text)
  utterance.rate = 0.5
  utterance.lang = "hi"
  speechSynthesis.speak(utterance)
}

const Flashcard = ({ letter, word }) => (
  <Card onClick={() => speakThis(letter)} onDoubleClick={() => speakThis(word)}>
    <Text variant="flash">{letter}</Text>
  </Card>
)
const keys = Object.keys(alphabet)

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {keys.map(key => (
      <Flashcard letter={key} word={alphabet[key]["word"]} key={key} />
    ))}
  </Layout>
)

export default IndexPage
