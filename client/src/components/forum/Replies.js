import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ReplyItem from "./ReplyItem";

const Replies = ({ replies }) => {
  return (
    <div>
      {replies.length > 0 && (
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            align="center"
          >
            View Comments
          </AccordionSummary>

          {replies.map((reply) => (
            <ReplyItem reply={reply} />
          ))}
        </Accordion>
      )}
    </div>
  );
};

export default Replies;
