import { useQuery } from "@tanstack/react-query";
import { getRequest } from "@/lib/axiosApi";
import type { SettingsResponse } from "@/types/types";

export default function useGetSettings() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["settings"],
    queryFn: (): Promise<SettingsResponse> =>
      getRequest<SettingsResponse>("/get_settings"),
  });

  return { isLoading, data, error };
}
