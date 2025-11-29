import { useQuery } from "@tanstack/react-query";
import { postRequest } from "@/lib/axiosApi";

export default function useGetMarkets(city_id: string) {
  interface MarketsResponse {
    data: { id: number; name: string; city_id: number }[];
    message: string;
    code: number;
  }

  const { isLoading, data, error } = useQuery({
    queryKey: ["markets"],
    queryFn: (): Promise<MarketsResponse> =>
      postRequest<MarketsResponse>("/get_cities", {
        city_id: city_id,
      }),

    enabled: !!city_id,
  });

  return { isLoading, data, error };
}
