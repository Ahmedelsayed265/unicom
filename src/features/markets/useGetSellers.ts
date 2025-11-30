import { useQuery } from "@tanstack/react-query";
import { getRequest } from "@/lib/axiosApi";

export interface SellerResponse {
  data: Seller[];
  message: string;
  code: number;
  total: number;
  pages_count: number;
}

export interface Seller {
  id: number;
  user_id: number;
  market_id: number;
  commercial_image: string | null;
  freelance_id: string | null;
  freelance_national_id: string | null;
  freelance_image: string | null;
  name: string;
  gender: string;
  market_type_id: number;
  product_type_id: number;
  area: number;
  status: string;
  created_at: string;
  updated_at: string;
  status_name: string;
  market_type: MarketType;
  product_type: ProductType;
  market: Market;
}

export interface MarketType {
  id: number;
  name: string;
}

export interface ProductType {
  id: number;
  name: string;
}

export interface Market {
  id: number;
  city_id: number;
  name: string;
  type: string;
  status: string;
  description: string;
  phone: string;
  address: string;
  deleted_at: string | null;
  created_at: string;
  updated_at: string;
  city: City;
}

export interface City {
  id: number;
  name: string;
}

export default function useGetSellers() {
  const { isLoading, data, error, refetch } = useQuery({
    queryKey: ["sellers"],
    queryFn: (): Promise<SellerResponse> =>
      getRequest<SellerResponse>("user/get_sellers"),
  });

  return { isLoading, data, error, refetch };
}
