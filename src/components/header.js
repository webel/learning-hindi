import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
/** @jsx jsx */
import { jsx } from "theme-ui"

const NavItemStyle = {
	variant: "styles.a",
	color: "gray",
	fontSize: ["smaller", 1, 2],
	textDecoration: "none",
	ml: [15, 40, 80],
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
				display: ["block", "flex"],
				alignItems: "center",
			}}
		>
			<h1 style={{ margin: 0 }}>
				<Link
					to="/"
					style={{
						color: `white`,
						textDecoration: `none`,
					}}
				>
					{siteTitle}
				</Link>
			</h1>
			<div>
				<Link sx={NavItemStyle} to="/">
					Vowels
				</Link>
				<Link sx={NavItemStyle} to="/commonWords">
					Common Words
				</Link>
				<Link sx={NavItemStyle} to="/learn">
					Learn words
				</Link>
				<Link sx={NavItemStyle} to="/greetings">
					Learn phrases
				</Link>
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
