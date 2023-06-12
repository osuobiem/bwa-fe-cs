import {APIUser, User} from "../../models/User";

export const usersMock: APIUser[] = [
  {
    login: "stanislav-web",
    id: 5216760,
    node_id: "MDQ6VXNlcjUyMTY3NjA=",
    avatar_url: "https://avatars.githubusercontent.com/u/5216760?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/stanislav-web",
    html_url: "https://github.com/stanislav-web",
    followers_url: "https://api.github.com/users/stanislav-web/followers",
    following_url:
      "https://api.github.com/users/stanislav-web/following{/other_user}",
    gists_url: "https://api.github.com/users/stanislav-web/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/stanislav-web/starred{/owner}{/repo}",
    subscriptions_url:
      "https://api.github.com/users/stanislav-web/subscriptions",
    organizations_url: "https://api.github.com/users/stanislav-web/orgs",
    repos_url: "https://api.github.com/users/stanislav-web/repos",
    events_url: "https://api.github.com/users/stanislav-web/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/stanislav-web/received_events",
    type: "User",
    site_admin: false,
    score: 1.0,
  },
  {
    login: "jdsecurity",
    id: 17735762,
    node_id: "MDQ6VXNlcjE3NzM1NzYy",
    avatar_url: "https://avatars.githubusercontent.com/u/17735762?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/jdsecurity",
    html_url: "https://github.com/jdsecurity",
    followers_url: "https://api.github.com/users/jdsecurity/followers",
    following_url:
      "https://api.github.com/users/jdsecurity/following{/other_user}",
    gists_url: "https://api.github.com/users/jdsecurity/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/jdsecurity/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/jdsecurity/subscriptions",
    organizations_url: "https://api.github.com/users/jdsecurity/orgs",
    repos_url: "https://api.github.com/users/jdsecurity/repos",
    events_url: "https://api.github.com/users/jdsecurity/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/jdsecurity/received_events",
    type: "User",
    site_admin: false,
    score: 1.0,
  },
  {
    login: "nurikk",
    id: 1525421,
    node_id: "MDQ6VXNlcjE1MjU0MjE=",
    avatar_url: "https://avatars.githubusercontent.com/u/1525421?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/nurikk",
    html_url: "https://github.com/nurikk",
    followers_url: "https://api.github.com/users/nurikk/followers",
    following_url: "https://api.github.com/users/nurikk/following{/other_user}",
    gists_url: "https://api.github.com/users/nurikk/gists{/gist_id}",
    starred_url: "https://api.github.com/users/nurikk/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/nurikk/subscriptions",
    organizations_url: "https://api.github.com/users/nurikk/orgs",
    repos_url: "https://api.github.com/users/nurikk/repos",
    events_url: "https://api.github.com/users/nurikk/events{/privacy}",
    received_events_url: "https://api.github.com/users/nurikk/received_events",
    type: "User",
    site_admin: false,
    score: 1.0,
  },
  {
    login: "snooplsm",
    id: 277186,
    node_id: "MDQ6VXNlcjI3NzE4Ng==",
    avatar_url: "https://avatars.githubusercontent.com/u/277186?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/snooplsm",
    html_url: "https://github.com/snooplsm",
    followers_url: "https://api.github.com/users/snooplsm/followers",
    following_url:
      "https://api.github.com/users/snooplsm/following{/other_user}",
    gists_url: "https://api.github.com/users/snooplsm/gists{/gist_id}",
    starred_url: "https://api.github.com/users/snooplsm/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/snooplsm/subscriptions",
    organizations_url: "https://api.github.com/users/snooplsm/orgs",
    repos_url: "https://api.github.com/users/snooplsm/repos",
    events_url: "https://api.github.com/users/snooplsm/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/snooplsm/received_events",
    type: "User",
    site_admin: false,
    score: 1.0,
  },
  {
    login: "zourdyzou",
    id: 69587933,
    node_id: "MDQ6VXNlcjY5NTg3OTMz",
    avatar_url: "https://avatars.githubusercontent.com/u/69587933?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/zourdyzou",
    html_url: "https://github.com/zourdyzou",
    followers_url: "https://api.github.com/users/zourdyzou/followers",
    following_url:
      "https://api.github.com/users/zourdyzou/following{/other_user}",
    gists_url: "https://api.github.com/users/zourdyzou/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/zourdyzou/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/zourdyzou/subscriptions",
    organizations_url: "https://api.github.com/users/zourdyzou/orgs",
    repos_url: "https://api.github.com/users/zourdyzou/repos",
    events_url: "https://api.github.com/users/zourdyzou/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/zourdyzou/received_events",
    type: "User",
    site_admin: false,
    score: 1.0,
  },
];

export const transformedUsersMock: User[] = [
  {
    username: "stanislav-web",
    avatarUrl: "https://avatars.githubusercontent.com/u/5216760?v=4",
    profileUrl: "https://github.com/stanislav-web",
  },
  {
    username: "jdsecurity",
    avatarUrl: "https://avatars.githubusercontent.com/u/17735762?v=4",
    profileUrl: "https://github.com/jdsecurity",
  },
  {
    username: "nurikk",
    avatarUrl: "https://avatars.githubusercontent.com/u/1525421?v=4",
    profileUrl: "https://github.com/nurikk",
  },
  {
    username: "snooplsm",
    avatarUrl: "https://avatars.githubusercontent.com/u/277186?v=4",
    profileUrl: "https://github.com/snooplsm",
  },
  {
    username: "zourdyzou",
    avatarUrl: "https://avatars.githubusercontent.com/u/69587933?v=4",
    profileUrl: "https://github.com/zourdyzou",
  },
];
