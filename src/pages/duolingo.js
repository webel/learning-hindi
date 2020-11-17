import React from "react"

import skills from "../data/duolingoSkills.json"

/** @jsx jsx */
import { Divider, Heading, jsx } from "theme-ui"

import { WordFlashCard } from "../components/flashcard"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Duo = () => (
	<Layout>
		<SEO title="Duolingo skills" />
		{skills.map(skill => (
			<>
				<Divider />
				<Heading as="h1" my={20} variant="lessonHeader">
					{skill.title}
				</Heading>
				<div dangerouslySetInnerHTML={{ __html: skill.explanation }} />
				<Divider />
				{skill.words.map(word => (
					<WordFlashCard key={word} item={{ hindi: word }} />
				))}
			</>
		))}
	</Layout>
)

export default Duo
