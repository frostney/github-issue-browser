export type RepositoryRouteParams = {
  owner: string;
  name: string;
};

export type IssueRouteParams = RepositoryRouteParams & {
  id: string;
};
