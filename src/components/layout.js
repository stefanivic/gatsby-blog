import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import favIcon from "../assets/favicon.png";
import Navigation from "./Navigation";

require("prismjs/themes/prism-solarizedlight.css");
require("typeface-raleway");
require("typeface-roboto-slab");

import css from "../assets/app.css";

const TemplateWrapper = ({ children }) => (
  <div
    style={{
      display: "grid",
      height: "100vh",
      gridTemplateColumns: "100%",
      gridTemplateRows: "60px 1fr"
    }}
  >
    <Helmet
      title="Stefan Ivić - Portfolio"
      meta={[
        { name: "description", content: "Stefan Ivić - Portfolio" },
        {
          name: "keywords",
          content:
            "front-end, design, developer, minimal, gatsby, stefan, ivic, ivić"
        }
      ]}
      link={[{ rel: "shortcut icon", type: "image/png", href: `${favIcon}` }]}
    >
      <html lang="en" />
    </Helmet>
    <Navigation />
    {children}
  </div>
);

export default TemplateWrapper;