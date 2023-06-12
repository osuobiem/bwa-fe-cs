import {rest} from "msw";
import {usersMock} from "./user.mock";
const baseUrl = "https://mock-api.com/search/users";

export const handlers = [
  // Search users request handler
  rest.get(`${baseUrl}`, (req, res, ctx) => {
    const searchParams = req.url.searchParams;

    if (searchParams.has("q") && searchParams.get("q") !== "") {
      return res(ctx.status(200), ctx.json({items: [...usersMock]}));
    }
  }),
];
