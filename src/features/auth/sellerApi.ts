import { axiosApi } from "@/lib/axiosApi";
import type { SellerRegistrationData } from "./schema";

export interface CreateSellerResponse {
  success: boolean;
  message: string;
  data?: {
    seller_id: string;
    store_number?: string;
    id_name?: string;
  };
}

export async function createSeller(
  data: SellerRegistrationData
): Promise<CreateSellerResponse> {
  const formData = new FormData();

  // Add text fields
  formData.append("market_id", data.market_id);
  formData.append("name", data.name);
  formData.append("gender", data.gender);
  formData.append("market_type_id", data.market_type_id);
  formData.append("product_type_id", data.product_type_id);
  formData.append("area", data.area);

  // Add optional fields
  if (data.freelance_id) {
    formData.append("freelance_id", data.freelance_id);
  }
  if (data.freelance_national_id) {
    formData.append("freelance_national_id", data.freelance_national_id);
  }

  // Add file uploads
  if (data.freelance_image) {
    formData.append("freelance_image", data.freelance_image);
  }

  const response = await axiosApi.post<CreateSellerResponse>(
    "crate_seller",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }
  );

  return response.data;
}

export async function updateSeller(
  data: SellerRegistrationData & { seller_id: string }
): Promise<CreateSellerResponse> {
  const formData = new FormData();

  formData.append("seller_id", data.seller_id);
  formData.append("market_id", data.market_id);
  formData.append("name", data.name);
  formData.append("gender", data.gender);
  formData.append("market_type_id", data.market_type_id);
  formData.append("product_type_id", data.product_type_id);
  formData.append("area", data.area);

  if (data.freelance_id) formData.append("freelance_id", data.freelance_id);
  if (data.freelance_national_id)
    formData.append("freelance_national_id", data.freelance_national_id);
  if (data.freelance_image) formData.append("freelance_image", data.freelance_image);

  const response = await axiosApi.post<CreateSellerResponse>(
    "user/update_seller",
    formData
  );

  return response.data;
}
