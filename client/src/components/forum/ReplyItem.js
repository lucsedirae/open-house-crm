import React, { Fragment } from "react";
import AccordionDetails from "@material-ui/core/AccordionDetails";

const ReplyItem = ({ reply }) => {
  return (
    <AccordionDetails style={{ display: "block" }}>
      <h6>{reply.body}</h6>
      <h4>{reply.name}</h4>
    </AccordionDetails>
  );
};

export default ReplyItem;
