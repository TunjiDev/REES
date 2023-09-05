import supabase from "../supabase";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { PropertiesFilter } from "@/types";

export const useGetProperties = (page: number, pageSize: number, filters: PropertiesFilter) =>
  useQuery({
    queryKey: ["properties", page, filters],
    queryFn: async () => {
      const offset = page * pageSize;
      let query = supabase
        .from("properties")
        .select("*")
        .range(offset, offset + pageSize - 1);

      // Apply filters if they are provided
      if (filters.location) {
        query = query.filter("location", "eq", filters.location);
      }

      if (filters.propertyType) {
        if (filters.propertyType === "For Rent") query = query.filter("forRent", "eq", true);
        if (filters.propertyType === "For Sale") query = query.filter("forSale", "eq", true);
      }

      if (filters.priceRange) {
        if (filters.priceRange === "250000") query = query.filter("price", "lte", Number(filters.priceRange));
        if (filters.priceRange === "500000") query = query.filter("price", "lte", Number(filters.priceRange));
        if (filters.priceRange === "1000000") query = query.filter("price", "lte", Number(filters.priceRange));
        if (filters.priceRange === "1000000+")
          query = query.filter("price", "gte", Number(filters.priceRange.slice(0, -1)));
      }

      // Apply sorting based on the filter order, if provided
      if (filters.order) {
        if (filters.order === "oldest") query = query.order("createdAt", { ascending: true });
        if (filters.order === "newest") query = query.order("createdAt", { ascending: false });
      } else {
        // If no sorting order is specified, default to sorting by createdAt in descending order
        query = query.order("createdAt", { ascending: false });
      }

      const { data, error } = await query;

      if (error) {
        toast.error(error.message);
        throw error;
      }

      const { count } = await supabase.from("properties").select("count", { count: "exact" });

      return { data, count } as any;
    },
    keepPreviousData: true,
  });

export const useGetProperty = (id: number) =>
  useQuery({
    queryKey: ["property", id],
    queryFn: async () => {
      let { data, error } = await supabase.from("properties").select("*").eq("id", id).single();

      if (error) {
        return toast.error(error.message);
      }

      return data as any;
    },
  });

export const useGetFeaturedProperties = () =>
  useQuery({
    queryKey: ["featuredProperties"],
    queryFn: async () => {
      const { data, error } = await supabase.from("properties").select("*").eq("isFeatured", true).limit(5);

      if (error) {
        return toast.error(error.message);
      }

      return data as any;
    },
  });

export const useGetRentProperties = () =>
  useQuery({
    queryKey: ["rentProperties"],
    queryFn: async () => {
      const { data, error } = await supabase.from("properties").select("*").eq("forRent", true).limit(4);

      if (error) {
        return toast.error(error.message);
      }

      return data as any;
    },
  });

export const useGetSaleProperties = () =>
  useQuery({
    queryKey: ["saleProperties"],
    queryFn: async () => {
      const { data, error } = await supabase.from("properties").select("*").eq("forSale", true).limit(4);

      if (error) {
        return toast.error(error.message);
      }

      return data as any;
    },
  });

export const useGetGalleryProperties = () =>
  useQuery({
    queryKey: ["galleryProperties"],
    queryFn: async () => {
      const { data, error } = await supabase.from("properties").select("*").eq("inGallery", true);

      if (error) {
        return toast.error(error.message);
      }

      return data as any;
    },
  });
