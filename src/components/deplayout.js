import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Depnavbar from "./depnavbar"
import Footer from "./footer"
import { css } from "styled-components"
import "./layout.css"
import "aos/dist/aos.css"

class Deplayout extends React.Component {
  constructor(props) {
    super(props);
    if (typeof window !== `undefined`) {
      const AOS = require("aos")
      AOS.init()
    }
  }
  ComponentDidMount() {
    if (typeof window !== `undefined`) {
      const AOS = require("aos")
      AOS.init()
    }
  }
  componentDidUpdate() {
    if (typeof window !== `undefined`) {
      const AOS = require("aos")
      AOS.refresh()
    }
  }
  render() {
    const children = this.props.children
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQueryAndSiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Depnavbar department={this.props.department}></Depnavbar>
            <div
              css={css`
                padding-top: 4.8vw;
              `}
            >
              <main>{children}</main>
              <Footer></Footer>
            </div>
          </>
        )}
      />
    )
  }
}
export default Deplayout
