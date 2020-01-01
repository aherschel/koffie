// tslint:disable
// this is an auto generated file. This will be overwritten

export const getTodo = `query GetTodo($id: ID!) {
  getTodo(id: $id) {
    id
    name
    description
    owner
  }
}
`;
export const listTodos = `query ListTodos(
  $filter: ModelTodoFilterInput
  $limit: Int
  $nextToken: String
) {
  listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      owner
    }
    nextToken
  }
}
`;
export const getFriend = `query GetFriend($id: ID!) {
  getFriend(id: $id) {
    id
    name
    owner
  }
}
`;
export const listFriends = `query ListFriends(
  $filter: ModelFriendFilterInput
  $limit: Int
  $nextToken: String
) {
  listFriends(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      owner
    }
    nextToken
  }
}
`;
