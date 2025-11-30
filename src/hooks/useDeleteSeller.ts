import type { AxiosError } from "axios";
import { postRequest } from "@/lib/axiosApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";

export default function useDeleteSeller() {
  const { t } = useTranslation();
  const queryClient = useQueryClient();

  const { mutate: deleteSellerAction, isPending } = useMutation({
    mutationFn: (sellerId: number) =>
      postRequest("user/delete_seller", { seller_id: sellerId }),

    onSuccess: () => {
      toast.success(t("toast.delete_success"));
      queryClient.invalidateQueries({ queryKey: ["sellers"] });
    },

    onError: (err: AxiosError<{ message?: string }>) => {
      console.error("Delete error:", err);
      const message = err.response?.data?.message || t("toast.delete_failed");
      toast.error(message);
    },
  });

  return { deleteSellerAction, isPending };
}
