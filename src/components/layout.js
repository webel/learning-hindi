/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
/** @jsx jsx */
import { jsx } from "theme-ui"
import Header from "./header"

const Layout = ({ children, flexDirection = "row" }) => {
	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`)

	return (
		<>
			<Header siteTitle={data.site.siteMetadata.title} />
			<div
				sx={{
					mx: [0, 1, 3, 6],
					maxWidth: 1200,
					padding: [0, 1, 3], // `0 1.0875rem 1.45rem`,
				}}
			>
				<main
					sx={{
						display: "flex",
						flexWrap: "wrap",
						flexDirection: flexDirection,
						alignItems: "center",
						justifyContent: "center",
						mb: [5],
					}}
				>
					{children}
				</main>
				<footer>
					© {new Date().getFullYear()}, Built by
					{` `}
					<a
						sx={{
							color: "highlight",
							textDecoration: "none",
							"&:hover": { color: "purple" },
						}}
						href="https://stenqvist.co"
					>
						V
					</a>
				</footer>
			</div>
		</>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
