import React from "react";
import CardPage from "./../src/components/CartPage/index";
import PageHead from "../src/components/Helpers/PageHead";
import Layout from "../src/components/Partials/Layout";

function cart() {
  return (
    <>
      <PageHead title="Cart" />
      <Layout childrenClasses="p-0">
        <CardPage />
      </Layout>
    </>
  );
}
export default cart;
