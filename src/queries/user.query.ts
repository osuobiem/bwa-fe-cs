import {useQuery} from "react-query";
import {users} from "../api/search/search.api";

export const useGetUsersQuery = (keyword: string) =>
  useQuery(["users", keyword], async () => {
    return keyword.length > 0 ? await users(keyword) : [];
  });
