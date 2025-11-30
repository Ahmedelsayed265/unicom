import type { LoginData } from "./schema";
import type { AxiosError } from "axios";
import { postRequest } from "@/lib/axiosApi";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import { useCookies } from "react-cookie";

export default function useLogin() {
  const navigate = useNavigate();
  const [, setCookie] = useCookies(["token"]);
  const { t } = useTranslation();

  interface ApiResponse<T> {
    data: T;
    message: string;
    code: number;
  }

  interface UserData {
    id: number;
    name: string;
    email: string;
    phone: string;
    token: string;
  }

  type UserApiResponse = ApiResponse<UserData>;

  const { mutate: loginAction, isPending } = useMutation<
    UserApiResponse,
    AxiosError<{ message?: string }>,
    LoginData
  >({
    mutationFn: (formData: LoginData) =>
      postRequest<UserApiResponse>("user/login", formData),

    onSuccess: (res) => {
      if (res.code === 200) {
      toast.success("تم تسجيل الدخول بنجاح")
        setCookie("token", res.data.token, {
          path: "/",
          secure: true,
          sameSite: "strict",
        });
        navigate("/");
      }
    },

    onError: (err) => {
      console.error("Login error:", err);
      const message = err.response?.data?.message || t("toast.login_failed");
      toast.error(message);
    },
  });

  return { loginAction, isPending };
}
