"use server";

import HomeComp from "./(components)/home";

export default async function Home({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  console.log("params", params);
  console.log("searchParams", searchParams);
  return (
    <>
      <HomeComp />
    </>
  );
}
