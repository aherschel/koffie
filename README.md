# koffie

## Run locally with the Amplify CLI

1. Clone the repo that was just forked in your account

  ```
  cd koffie && yarn install
  ```

2. Import the backend environment deployed by the Amplify Console to your repo (the `amplify/team-provider.json` file contains information on all backend environments in your AWS account). The GIF below shows how you to copy the `amplify env import` command from the Amplify Console. 

3. Paste this command into your terminal at the root of your repo. You should see the `amplify/team-provider.json` updated with a backend named `amplify`.

  ```
  amplify env import --name amplify --config "{<stack>}" --awsInfo "{<profile>}" --yes

  Successfully added environment from your project
  ```

3. Initialize the Amplify CLI with the `amplify` environment.

  ```
  amplify init
  ? Do you want to use an existing environment? Yes
  ? Choose the environment you would like to use: (Use arrow keys)
  > amplify
  ```

4. Run locally

  ```
  npm start
  ```
