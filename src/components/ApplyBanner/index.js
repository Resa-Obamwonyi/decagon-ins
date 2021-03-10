import React from "react";
import { ApplyBannerStyle } from "./style";
import Button from "../Button";
import apply from "../../images/apply.png";

function ApplyBanner() {
  return (
    <ApplyBannerStyle background={apply}>
      <h1>Ready to become a Decadev ? </h1>
        <Button link={"/apply"}>
          Apply Now
        </Button>
    </ApplyBannerStyle>
  );
}

export default ApplyBanner;
