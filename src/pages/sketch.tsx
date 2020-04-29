import React from "react";
import { PageViewSketch } from "components";
import { NextPage } from "next";

const TypeSize: NextPage<{ size: string }> = ({ size }) => {
  return <PageViewSketch browserSize={size} />;
};

TypeSize.getInitialProps = async ({ query }) => {
  const sizeStr = query.size && query.size.toString();
  return { size: sizeStr };
};

export default TypeSize;
