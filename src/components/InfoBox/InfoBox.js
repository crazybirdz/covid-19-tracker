import React from "react";
import { Typography, Card } from "@material-ui/core";
import numeral from "numeral";

import "./InfoBox.css";

function InfoBox({ cases, total, title, clicked, casesType, active }) {
  return (
    <Card
      className={`infoBox ${active && `infoBox--${casesType}--active`}`}
      onClick={clicked}>
      <Typography variant='h6' className='infoBox__title'>
        {title}
      </Typography>
      <div className={`infoBox__number infoBox__number--${casesType}`}>
        {numeral(cases).format("0.0a")}
      </div>
      <div className='infoBox__total'>
        {numeral(total).format("0.0a")} Total
      </div>
    </Card>
  );
}

export default InfoBox;
