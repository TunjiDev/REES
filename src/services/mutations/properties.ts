import supabase from "../supabase";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { PropertiesType } from "@/types";

export const useCreatePropertyMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(
    ["createProperty"],
    async (property: PropertiesType) => {
      const imageName = `${Math.random()}-${property.image.name}`.replaceAll("/", "");

      const imagePath = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/rees/${imageName}`;
      //1. Create a new property
      const { data, error } = await supabase
        .from("properties")
        .insert([{ ...property, image: imagePath }])
        .select();

      if (error) {
        return toast.error(error.message);
      }

      //2. Upload image
      const { error: storageError } = await supabase.storage.from("rees").upload(imageName, property.image);

      //3. Delete property if there was an error uploading image
      if (storageError) {
        await supabase.from("properties").delete().eq("id", data);
        return toast.error(storageError.message);
      }

      return data;
    },
    {
      onSuccess: () => {
        toast.success("New Property added successfully!");
        queryClient.invalidateQueries({ queryKey: ["properties"] });
      },
      onError: (error: any) => {
        toast.error(error.message);
      },
    }
  );
};
