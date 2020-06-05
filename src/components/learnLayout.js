import React, { useState } from "react"

/** @jsx jsx */
import { Button, Checkbox, Label, jsx } from "theme-ui"
import { WordFlashCard } from "../components/flashcard"
import { iastEnglishDetails } from '../components/detailsUnderFlashcard'
import Layout from "../components/layout"
import SEO from "../components/seo"

function randomIndex(maxIndex) {
	return Math.floor(Math.random() * maxIndex)
}

const AllView = ({ data, ...props }) => {
	return data.map(item => (
		<WordFlashCard
			key={`${item.hindi}-${Math.random()}`}
			item={item}
			{...props}
		/>
	))
}

const SingleView = ({ data, showDetails, ...props }) => {
	const maxIndex = props.maxIndex || data.length
	const initialIndex = randomIndex(maxIndex)
	const [item, setItem] = useState(data[initialIndex])

	const getNextItem = () => {
		const index = randomIndex(data.length)
		setItem(data[index])
	}

	return (
		<>
			<WordFlashCard
				showDetails={showDetails || iastEnglishDetails}
				item={item}
				{...props}
				single
			/>
			<Button sx={{ fontSize: "small" }} onClick={getNextItem}>
				Next
			</Button>
		</>
	)
}

const LearnLayout = ({ seoTitle, ...props}) => {
	const [flashCardView, setFlashCardView] = useState(false)

	function doubleClick() {
		setFlashCardView(!flashCardView)
	}

	return (
		<Layout
			doubleClick={doubleClick}
			flexDirection={flashCardView ? "column" : "row"}
		>
			<SEO title={seoTitle || "Learn"} />
			{flashCardView ? <SingleView {...props} /> : <AllView {...props} />}
		</Layout>
	)
}

export default LearnLayout
