import React from "react";
import Guidepage from "../../components/Guidepage";
import News from "../../components/News";


const GuideById = ({ data }) => {
  return (
    <>
      <Guidepage data={data} />
    </>
  );
};

export default GuideById;

export async function getServerSideProps({ params }) {
  const res = await fetch(
    `https://admin.nimagap.uz/items/gcguide_translations/?filter[gcguide_id]=${params.guide}`
  );

  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
