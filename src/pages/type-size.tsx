import React from "react";
import { PageViewTypeSize } from "components";
import { NextPage } from "next";

const TypeSize: NextPage<{ size: string }> = ({ size }) => {
  return <PageViewTypeSize browserSize={size} />;
};

TypeSize.getInitialProps = async ({ query }) => {
  const sizeStr = query.size && query.size.toString();
  return { size: sizeStr };
};

export default TypeSize;
