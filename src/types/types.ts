export interface SettingsData {
  id: number;
  whatsapp: string | null;
  phone: string | null;
  email: string | null;
  terms_link: string;
  privacy_link: string;
  about_link: string;
  terms: string;
  privacy: string;
  address: string | null;
}

export interface SettingsResponse {
  data: SettingsData;
  message: string;
  code: number;
}
