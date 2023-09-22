import { createAction } from '@reduxjs/toolkit';

import { AuthorizationStatus } from '../consts/authorization-status';

enum Action {
  Quests = 'quests',
  Quest = 'quest',
  Data = 'data',
  User = 'user',
  App = 'app'
}

const setActiveTheme = createAction<Theme>(`${Action.Quests}/setActiveTheme`)
const setActiveDifficultyLevel = createAction<DifficultyLevel>(`${Action.Quests}/setActiveDifficultyLevel`)
const getQuests = createAction<QuestType[]>(`${Action.Quests}/getQuests`)
const getExtendedQuest = createAction<ExtendedQuestType>(`${Action.Quest}/getExtendedQuest`)
const setAuthorizationStatus = createAction<AuthorizationStatus>(`${Action.User}/setAuthorizationStatus`)

export {
  getExtendedQuest,
  getQuests,
  setActiveDifficultyLevel,
  setActiveTheme,
  setAuthorizationStatus,
};
