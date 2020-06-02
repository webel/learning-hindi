import React from "react"
import { Link } from "gatsby"

/** @jsx jsx */
import { jsx } from "theme-ui"

const NavItemStyle = {
	variant: "styles.a",
	color: "gray",
	fontSize: ["smaller", 1, 2],
	ml: [15, 40, 80],
}

const NavItemProps = {
	activeClassName: "active",
	sx: NavItemStyle,
}

const routes = [
	{ name: "Vowels", to: "/" },
	{ name: "Common Words", to: "/commonWords" },
	{ name: "Learn Words", to: "/learn" },
	{ name: "Learn Phrases", to: "/greetings" },
]

function Routes() {
	return routes.map(route => (
		<Link {...NavItemProps} to={route.to}>
			{route.name}
		</Link>
	))
}

export default Routes
