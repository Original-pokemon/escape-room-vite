export enum Action {
  Quests = 'quests',
  Quest = 'quest',
  Data = 'data',
  User = 'user',
  App = 'app'
}


export const APIRoute = {
  Quests: '/quest',
  Login: '/login',
  Logout: '/logout',
  Quest: {
    Info: (id: string) => `/quest/${id}`,
  }
} as const;
