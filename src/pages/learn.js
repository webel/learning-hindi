import React, { useState } from "react"

/** @jsx jsx */
import { jsx } from "theme-ui"
import Flashcard, { WordFlashCard } from "../components/flashcard"
import Layout from "../components/layout"

import commonWords from "../data/100mostCommonWords.json"

const first_twenty = commonWords.slice(0, 20)

const Display = ({ word }) => <WordFlashCard {...word} showDetails />

const Learn = () => {
  const next_index = Math.floor(Math.random() * 20)
  const [word, setWord] = useState(first_twenty[next_index])

  return (
    <Layout flexDirection="column">
      <Display word={word} />
    </Layout>
  )
}

export default Learn
