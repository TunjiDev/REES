"use server";

import React from "react";
import supabase from "@/services/supabase";
import ClientProperty from "../(components)/property";

export default async function Property({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const getProperty = async () => {
    let { data } = await supabase.from("properties").select("*").eq("id", params.id).single();

    return data as any;
  };

  const initialData = await getProperty();

  return (
    <>
      <ClientProperty initialData={initialData} />
    </>
  );
}
