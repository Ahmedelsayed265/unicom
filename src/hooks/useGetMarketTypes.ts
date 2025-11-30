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

export default function useGetMarketTypes() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["market-types"],
    queryFn: (): Promise<CitiesResponse> =>
      getRequest<CitiesResponse>("/get_market_types"),
  });

  return { isLoading, data, error };
}
