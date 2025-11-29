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

export default function useGetCities() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["cities"],
    queryFn: (): Promise<CitiesResponse> =>
      getRequest<CitiesResponse>("/get_cities"),
  });

  return { isLoading, data, error };
}
