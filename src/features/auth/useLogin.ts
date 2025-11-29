import type { AxiosError } from "axios";
import { postRequest } from "@/lib/axiosApi";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import type { LoginData } from "./schema";

export default function useLogin() {
  const navigate = useNavigate();
  const { t } = useTranslation();


  const { mutate: loginAction, isPending } = useMutation({
    mutationFn: (formData: LoginData): Promise<""> =>
      postRequest<"">("user/login", {...formData, token: "123"}),

    onSuccess: (res: "") => {
      navigate("/");
    },

    onError: (err: AxiosError<{ message?: string }>) => {
      console.error("Login error:", err);
      const message = err.response?.data?.message || t("toast.login_failed");
      toast.error(message);
    },
  });

  return { loginAction, isPending };
}
