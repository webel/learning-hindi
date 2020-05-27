import React from "react"
import { Link } from "gatsby"

import alphabet from "../data/alphabet.json"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Flashcard from "../components/flashcard"

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
