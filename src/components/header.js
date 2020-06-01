import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
/** @jsx jsx */
import { jsx, NavLink } from "theme-ui"

const NavItemStyle = { color: "gray", fontSize: ["smaller", 1, 2], textDecoration: "none", ml: [15, 40, 80] }

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
				<NavLink
					to="/"
					style={{
						color: `white`,
						textDecoration: `none`,
					}}
				>
					{siteTitle}
				</NavLink>
			</h1>
			<div>
				<NavLink sx={NavItemStyle} to="/">
					Vowels
				</NavLink>
				<NavLink sx={NavItemStyle} to="/commonWords">
					Common Words
				</NavLink>
				<NavLink sx={NavItemStyle} to="/learn">
					Learn words
				</NavLink>
				<NavLink sx={NavItemStyle} to="/greetings">
					Learn phrases
				</NavLink>
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
