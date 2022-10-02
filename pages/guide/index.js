import Main from '../../components/Main';
import React from 'react'

export default function index({data}) {
  return (
    <Main data={data.data }/>
  )
}

export async function getServerSideProps() {
    const res2 = await fetch("https://admin.nimagap.uz/items/gcnews_translations");
    const data = await res2.json();
   
    return {
      props: {
        data,
      },
    };
  }
