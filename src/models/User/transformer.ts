import {User} from ".";

export interface APIUser {
  login: string;
  id?: number;
  node_id?: string;
  avatar_url: string;
  gravatar_id?: string;
  url?: string;
  html_url: string;
  followers_url?: string;
  following_url?: string;
  gists_url?: string;
  starred_url?: string;
  subscriptions_url?: string;
  organizations_url?: string;
  repos_url?: string;
  events_url?: string;
  received_events_url?: string;
  type?: string;
  site_admin?: boolean;
  score?: number;
}

/**
 * Transform user API data
 */
export const transform = (users: APIUser[]) => {
  const transformedUsers: User[] = users.map((user) => {
    return {
      username: user.login,
      avatarUrl: user.avatar_url,
      profileUrl: user.html_url,
    };
  });

  return transformedUsers;
};
