import React from "react"
import { Card, Text, jsx } from "theme-ui"

export const iastEnglishDetails = ({ english, iast }) => {
	return (
		<>
			{iast && <Text my={20}>{iast}</Text>}
			<Text mb={20} variant="caps">
				{english}
			</Text>
		</>
	)
}

export const letterDetails = ({ english, iast, word, soundsLike }) => (
	<>
		{iast && <Text my={20}>{iast}</Text>}
        {(word || english) && <Text mb={20} variant="caps">
            {word} - {english}
        </Text>}
        {soundsLike && <Text mb={20}>{soundsLike}</Text>}
	</>
)
