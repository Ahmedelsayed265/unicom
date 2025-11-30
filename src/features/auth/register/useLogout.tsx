import { postRequest } from "@/lib/axiosApi";
import { useMutation } from "@tanstack/react-query";
import { useCookies } from "react-cookie";

export default function useLogout() {
  const [, , removeCookies] = useCookies(["token"]);

  return useMutation({
    mutationFn: () => postRequest("user/logout"),
    onSuccess: () => {
      removeCookies("token");
    },
  });
}
