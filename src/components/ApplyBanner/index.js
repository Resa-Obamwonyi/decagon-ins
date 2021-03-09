import React from "react";
import { ApplyBannerStyle } from "./style";
import apply from "../../images/apply.png";

function ApplyBanner() {
    return (
        <ApplyBannerStyle>
        
          <img src={apply} alt="apply-banner" />  
      </ApplyBannerStyle>
  );
}

export default ApplyBanner;
