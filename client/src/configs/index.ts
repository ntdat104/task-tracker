import { environment } from "environments/environment";

interface ConfigType {
  API_URL: string;
}

export const config: ConfigType = {
  API_URL: environment.API_URL,
};
