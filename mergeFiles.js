/**
 * @author: Evita Stenqvist
 *
 * @description: Script to merge JSON array with a JSON dictionary and dump
 * a JSON array with the wanted keys.
 */

const fs = require("fs")
const path = require("path")

const mergeInto = require("./src/data/alphabet.json")
const mergeFrom = require("./src/data/vowels.json")

const newFilePath = "./src/data/combined.json"

const data = Object.keys(mergeInto).map(devanagari => {
	const item = mergeFrom.find(item => item["Devanagari"] == devanagari)
	const oldItem = mergeInto[devanagari]
	return {
		hindi: devanagari,
		...oldItem,
		soundsLike: item ? item["Equivalent"] : "",
	}
})

fs.writeFileSync(path.resolve(newFilePath), JSON.stringify(data, true, 2))

