export enum Action {
  Quests = 'quests',
  Quest = 'quest',
  Booking = 'booking',
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
    Booking: (id: string) => `/quest/${id}/booking`
  }
} as const;
