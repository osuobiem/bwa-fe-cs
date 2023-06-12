import {setupServer} from "msw/node";
import handlers from "./handlers.msw";

// This configures a Server with the given request handlers.
export const mswServer = setupServer(...handlers);
