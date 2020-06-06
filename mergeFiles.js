/**
 * @author: Evita Stenqvist
 *
 * @description: Takes on different hats depending on the task.
 */

const fs = require("fs")
const path = require("path")

const mergeFrom = require("./src/data/1000mostCommonWords.json")
const mergeInto = require("./src/data/consonants.json")

const newFilePath = "./src/data/combined.json"

const data = mergeInto.map(item => {
	const firstLetter = item.hindi.slice(0, 1)
	const word = mergeFrom.find(word => word.hindi.startsWith(firstLetter))
	return {
		word: word && word.hindi,
		english: word && word.english, 
		...item,
	}
})

fs.writeFileSync(path.resolve(newFilePath), JSON.stringify(data, true, 2))

