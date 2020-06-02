import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
/** @jsx jsx */
import { jsx, useColorMode, Button } from "theme-ui"

const NavItemStyle = {
	variant: "styles.a",
	color: "gray",
	fontSize: ["smaller", 1, 2],
	textDecoration: "none",
	ml: [15, 40, 80],
}

const NavItemProps = {
	activeClassName: 'active',
	sx: NavItemStyle,
}

const SetColorMode = () => {
	const [colorMode, setColorMode] = useColorMode()
	return (
		<Button
			sx={{
				fontSize: ["xx-small", "x-small"],
				ml: [2, 3, 4],
				mt: [2, 0, 0]
			}}
			onClick={e => {
				setColorMode(colorMode === "default" ? "light" : "default")
			}}
		>
			Toggle {colorMode === "default" ? "Light" : "Dark"}
		</Button>
	)
}

const Header = ({ siteTitle }) => (
	<header
		sx={{
			// background: `#B74F6F`,
			marginBottom: [0, 1, 3],
		}}
	>
		<div
			sx={{
				margin: `0 auto`,
				maxWidth: 960,
				padding: `1.45rem 1.0875rem`,
				display: ["block", "block", "flex"],
				alignItems: "center",
			}}
		>
			<h1 style={{ margin: 0 }}>
				<Link
					to="/"
					sx={{
						variant: "styles.title",
						textDecoration: `none`,
					}}
				>
					{siteTitle}
				</Link>
			</h1>
			<div>
				<Link {...NavItemProps} to="/">
					Vowels
				</Link>
				<Link {...NavItemProps} to="/commonWords">
					Common Words
				</Link>
				<Link {...NavItemProps} to="/learn">
					Learn words
				</Link>
				<Link {...NavItemProps} to="/greetings">
					Learn phrases
				</Link>
				<SetColorMode />
			</div>
		</div>
	</header>
)

Header.propTypes = {
	siteTitle: PropTypes.string,
}

Header.defaultProps = {
	siteTitle: ``,
}

export default Header
