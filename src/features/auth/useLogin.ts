import type { AxiosError } from "axios";
import { postRequest } from "@/lib/axiosApi";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import type { LoginData } from "./schema";
import { useCookies } from "react-cookie";

export default function useLogin() {
  const navigate = useNavigate();
  const [, setCookie] = useCookies(["token"]);
  const { t } = useTranslation();

  const { mutate: loginAction, isPending } = useMutation({
    mutationFn: (formData: LoginData) =>
      postRequest("user/login", { ...formData, token: "123" }),

    onSuccess: (res) => {
      if (res.data.code === 200) {
        setCookie("token", res.data.token, {
          path: "/",
          secure: true,
          sameSite: "strict",
        });
        navigate("/");
      }
    },

    onError: (err: AxiosError<{ message?: string }>) => {
      console.error("Login error:", err);
      const message = err.response?.data?.message || t("toast.login_failed");
      toast.error(message);
    },
  });

  return { loginAction, isPending };
}
