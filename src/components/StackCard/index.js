import React from "react";
import { StackCardStyle } from "./style";


function StackCard({stack, img}) {
    return (
      <StackCardStyle>
        <div className="img">
          <img src={img} alt="stack-logo" />
        </div>
        <div className="content">
          <h4>{stack} Stack</h4>
          <p>View Curriculum</p>
        </div>
      </StackCardStyle>
    );
}

export default StackCard;