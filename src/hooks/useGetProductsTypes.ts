import { useQuery } from "@tanstack/react-query";
import { getRequest } from "@/lib/axiosApi";

interface CitiesResponse {
  data: {
    id: number;
    name: string;
  }[];
  message: string;
  code: number;
}

export default function useGetProductsTypes() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["products-types"],
    queryFn: (): Promise<CitiesResponse> =>
      getRequest<CitiesResponse>("/get_product_types"),
  });

  return { isLoading, data, error };
}
