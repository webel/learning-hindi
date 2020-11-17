import React from "react"

/** @jsx jsx */
import { jsx, Button } from "theme-ui"
import Routes from "./routes"
import SetColorMode from "./setColorMode"

const windowGlobal = typeof window !== "undefined" && window

const SideMenu = () => {
	const localStorageValue = windowGlobal.localStorage && windowGlobal.localStorage.getItem("MenuOpen")
	const [showMenu, setShowMenu] = React.useState(localStorageValue)

    function saveStateToBrowser() {
        setShowMenu(!showMenu)
        windowGlobal.localStorage &&
					windowGlobal.localStorage.setItem("MenuOpen", showMenu)
    }

	return (
		<>
			<aside
				sx={{
					position: "fixed",
					width: ["50vw", "40vw", "20vw"],
					height: "100vh",
					backgroundColor: "highlight",
					boxShadow: "0 0 8px rgba(0, 0, 0, 0.125)",
					top: 0,
					right: !showMenu ? ["-50vw", "-40vw", "-20vw"] : 0,
					zIndex: 999,
					transition: "all 1s ease",
					//display: !showMenu && "none",
				}}
			>
				<div
					onClick={saveStateToBrowser}
					sx={{
						position: "relative",
						boxShadow: "0 0 8px rgba(0, 0, 0, 0.125)",
						cursor: "pointer",
						left: "-22.5px",
						borderRadius: "50%",
						marginTop: "40px",
						padding: "10px",
						backgroundColor: "highlight",
						width: "40px",
						height: "40px",
					}}
				/>
				<div
					sx={{
						py: "40%",
						height: "100%",
						display: "flex",
						flexDirection: "column",
					}}
				>
					<Routes />
					<SetColorMode />
				</div>
			</aside>
		</>
	)
}

export default SideMenu
