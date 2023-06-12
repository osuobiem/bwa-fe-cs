import axios, {AxiosResponse} from "axios";
import {APIUser, transform as transformUser} from "../../models/User";

interface Response extends AxiosResponse {
  data: {
    incomplete_results: boolean;
    items: APIUser[];
    total_count: number;
  };
}

/**
 * Users search API
 */
export const users = async (keyword: string) => {
  return axios
    .get(`${process.env.VITE_APP_GITHUB_API_URL}/search/users?q=${keyword}`)
    .then((res: Response) => transformUser(res.data.items))
    .catch((err) => {
      throw new Error(err);
    });
};
