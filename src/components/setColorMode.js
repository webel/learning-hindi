import React from "react"
import { jsx, useColorMode, Button } from "theme-ui"

function SetColorMode() {
	const [colorMode, setColorMode] = useColorMode()
	return (
		<Button
			sx={{
				fontSize: ["xx-small", "x-small"],
				ml: [2, 3, 4],
				mt: [2, 0, 0],
			}}
			onClick={e => {
				setColorMode(colorMode === "default" ? "light" : "default")
			}}
		>
			Toggle {colorMode === "default" ? "Light" : "Dark"}
		</Button>
	)
}

export default SetColorMode
