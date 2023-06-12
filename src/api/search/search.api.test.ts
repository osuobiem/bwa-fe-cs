import {transformedUsersMock} from "../../mocks/user/user.mock";
import {users} from "./search.api";

process.env.VITE_APP_GITHUB_API_URL = "https://mock-api.com";

describe("Search for users and organizations", () => {
  describe("GET /search/users", () => {
    it("fetches and returns a list of users", async () => {
      const data = await users("John Doe");

      expect(data).toEqual([...transformedUsersMock]);
    });
  });
});
