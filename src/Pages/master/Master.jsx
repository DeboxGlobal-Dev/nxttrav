import React from "react";
import Layout from "../../Component/Layout/Layout";
import MasterMenu from "./MasterMenu";

const Master = () => {
  return (
    <>
    <Layout>
      <div className="master container-fluid">
        <div className="row px-2 py-4 bg-light mb-4">
            <MasterMenu/>
        </div>
      </div>
      </Layout>
    </>
  );
};

export default Master;