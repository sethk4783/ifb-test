import React from "react";
import { Typography } from "antd";
import { useSelector } from "react-redux";

const { Title } = Typography;

const selectDateView = (state) => {
  return state;
};

const ViewDatePicker = () => {
  const date = useSelector((state) => selectDateView(state));

  return <Title>{date?.setViewDate?.date || "Date is not set"}</Title>;
};

export default ViewDatePicker;
