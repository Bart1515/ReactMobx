import "./App.css";
import React, { useContext } from "react";
import styled from "styled-components";
import _ from "lodash";
import { observer } from "mobx-react";

import MyContext from "./Context";

const StyledSection = styled.div`
  border-radius: 25px;
  border: 2px solid #73ad21;
  padding: 20px;
  float: left;
`;

const Section = observer((props) => {
  const mySections = useContext(MyContext);
  const handleClick = (item) => {
    if (
      _.find(mySections.secs, function (s) {
        return s.id === item.id;
      })
    ) {
      mySections.remove(item);
    } else {
      mySections.add(item);
    }
  };

  return (
    <StyledSection onClick={() => handleClick(props.item)}>
      {props.item.webTitle}
    </StyledSection>
  );
});

export default Section;
