import type { AxiosError } from "axios";
import { postRequest } from "@/lib/axiosApi";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import type { RegisterData } from "./schema";

export default function useRegester() {
  const navigate = useNavigate();
  const { t } = useTranslation();


  const { mutate: registerAction, isPending } = useMutation({
    mutationFn: (formData: RegisterData) =>
      postRequest("user/register", { ...formData}),

    onSuccess: () => {
      navigate("/");
    },

    onError: (err: AxiosError<{ message?: string }>) => {
      console.error("Register error:", err);
      const message = err.response?.data?.message || t("toast.login_failed");
      toast.error(message);
    },
  });

  return { registerAction, isPending };
}
