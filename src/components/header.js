import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
/** @jsx jsx */
import { jsx } from "theme-ui"

import Routes from "./routes"
import SetColorMode from './setColorMode'

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
			<Routes />
			<SetColorMode />
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
