import React from "react";
import { StackCardStyle } from "./style";


function StackCard({stack}) {
    return (
        <StackCardStyle>
            <h4>{stack} Stack</h4>
            <p>View Curriculum</p>
        </StackCardStyle>
      
    )
}

export default StackCard;