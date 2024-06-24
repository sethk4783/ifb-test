import React from "react";
import { DatePicker as AntDatePicker } from "antd";

import { useDispatch } from "react-redux";

const DatePicker = () => {
  const dispatch = useDispatch();

  const dateFormat = 'YYYY-MM-DD';

  const handleDateChange = (date, dateString) => {
    dispatch({ type: "SET_DATE", payload: dateString });
  };

  return <AntDatePicker onChange={handleDateChange} format={dateFormat} />;
};

export default DatePicker;
