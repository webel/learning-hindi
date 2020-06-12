import React from "react"
import { Link } from "gatsby"

/** @jsx jsx */
import { jsx } from "theme-ui"

const NavItemStyle = {
	variant: "styles.a",
	color: "text",
	fontSize: ["smaller", 1, 2],
	ml: [12, 40, 50],
	mb: '20px',
    // ":first-of-type": {
    //     ml: ['0px', 12, 20, 50]
    // }
}

const NavItemProps = {
	activeClassName: "active",
	sx: NavItemStyle,
}

const routes = [
	{ name: "Devanagari", to: "/" },
	{ name: "Words", to: "/commonWords" },
	// { name: "Learn Words", to: "/learn" },
	{ name: "Greetings", to: "/greetings" },
	{ name: "Help & Directions", to: "/helpDirections" },
	{ name: "Prepositions", to: "/prepositions" }
]

function Routes() {
	return routes.map(route => (
		<Link key={route.name} {...NavItemProps} to={route.to}>
			{route.name}
		</Link>
	))
}

export default Routes
