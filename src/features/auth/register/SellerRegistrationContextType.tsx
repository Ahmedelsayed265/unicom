import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import type { SellerRegistrationData } from "../schema";

interface SellerRegistrationContextType {
  formData: Partial<SellerRegistrationData & { seller_id?: string; area_store?: string }>;
  updateFormData: (data: Partial<SellerRegistrationData & { seller_id?: string; area_store?: string }>) => void;
  resetFormData: () => void;
}

const SellerRegistrationContext = createContext<
  SellerRegistrationContextType | undefined
>(undefined);

export function SellerRegistrationProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [formData, setFormData] = useState<Partial<SellerRegistrationData & { seller_id?: string; area_store?: string }>>({});

  const updateFormData = (data: Partial<SellerRegistrationData & { seller_id?: string; area_store?: string }>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const resetFormData = () => {
    setFormData({});
  };

  return (
    <SellerRegistrationContext.Provider
      value={{ formData, updateFormData, resetFormData }}
    >
      {children}
    </SellerRegistrationContext.Provider>
  );
}

export function useSellerRegistration() {
  const context = useContext(SellerRegistrationContext);
  if (!context) {
    throw new Error(
      "useSellerRegistration must be used within SellerRegistrationProvider"
    );
  }
  return context;
}