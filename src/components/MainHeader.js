import React from "react";

import { Header } from "semantic-ui-react";
function MainHeader({ title, type }) {
  return <Header size={type}>{title}</Header>;
}

export default MainHeader;
