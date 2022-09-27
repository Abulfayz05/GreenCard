import React from "react";
import News from "../../components/News";

const NewsById = ({ data }) => {
  return (
    <>
      <News data={data} />
    </>
  );
};

export default NewsById;

export async function getServerSideProps({ params }) {
  const res = await fetch(
    `https://admin.uzbekvoice.ai/items/news_translations/?filter[news_id]=${params.news}`
  );

  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
