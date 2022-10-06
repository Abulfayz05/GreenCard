import MainCollectoin from '../../components/MainCollection'
import React from 'react'

export default function index({data}) {
  return (
    <MainCollectoin data={data.data }/>
  )
}

export async function getServerSideProps() {
    const res2 = await fetch("https://admin.nimagap.uz/items/gcguide");
    const data = await res2.json();
   
    return {
      props: {
        data,
      },
    };
  }
