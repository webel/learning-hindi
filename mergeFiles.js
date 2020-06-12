/**
 * @author: Evita Stenqvist
 *
 * @description: Takes on different hats depending on the task.
 */

const fs = require("fs")
const path = require("path")

// const mergeFrom = require("./src/data/1000mostCommonWords.json")
const origin = require("./src/data/prepositions.json")

const newFilePath = "./src/data/combined.json"

const data = origin.map(item => {
	const [iast, hindi] = item.hindi.split(' - ')
	return {
		english: item.english,
		iast,
		hindi
	}
})

fs.writeFileSync(path.resolve(newFilePath), JSON.stringify(data, true, 2))

