import React from "react";
import { Typography } from "@material-ui/core";

import "./Table.css";

import { sortTableData } from "../../shared/utils";

function Table({ countries }) {
  const tableInfo = sortTableData(countries).map((country) => {
    return (
      <tr key={country.name} className='table__row'>
        <td className='table__country'>{country.name}</td>
        <td className='table__cases'>{country.cases}</td>
      </tr>
    );
  });
  return (
    <div className='table'>
      <Typography variant='h5' className='table__title'>
        Total Cases by Country
      </Typography>
      <table className='table__tableInfo'>
        <tbody className='table__tbody'>{tableInfo}</tbody>
      </table>
    </div>
  );
}

export default Table;
