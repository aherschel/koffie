// tslint:disable
// this is an auto generated file. This will be overwritten

export const createTodo = `mutation CreateTodo(
  $input: CreateTodoInput!
  $condition: ModelTodoConditionInput
) {
  createTodo(input: $input, condition: $condition) {
    id
    name
    description
    owner
  }
}
`;
export const updateTodo = `mutation UpdateTodo(
  $input: UpdateTodoInput!
  $condition: ModelTodoConditionInput
) {
  updateTodo(input: $input, condition: $condition) {
    id
    name
    description
    owner
  }
}
`;
export const deleteTodo = `mutation DeleteTodo(
  $input: DeleteTodoInput!
  $condition: ModelTodoConditionInput
) {
  deleteTodo(input: $input, condition: $condition) {
    id
    name
    description
    owner
  }
}
`;
export const createFriend = `mutation CreateFriend(
  $input: CreateFriendInput!
  $condition: ModelFriendConditionInput
) {
  createFriend(input: $input, condition: $condition) {
    id
    name
    owner
  }
}
`;
export const updateFriend = `mutation UpdateFriend(
  $input: UpdateFriendInput!
  $condition: ModelFriendConditionInput
) {
  updateFriend(input: $input, condition: $condition) {
    id
    name
    owner
  }
}
`;
export const deleteFriend = `mutation DeleteFriend(
  $input: DeleteFriendInput!
  $condition: ModelFriendConditionInput
) {
  deleteFriend(input: $input, condition: $condition) {
    id
    name
    owner
  }
}
`;
