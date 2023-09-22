import { createReducer } from '@reduxjs/toolkit';

import { AuthorizationStatus } from '../consts/authorization-status';
import {
  getExtendedQuest,
  getQuests,
  setActiveDifficultyLevel,
  setActiveTheme,
  setAuthorizationStatus,
} from './actions';

type InitialStateType = {
  activeTheme: Theme;
  activeDifficultyLevel: DifficultyLevel;
  quests: QuestType[] | null;
  extendedQuest: ExtendedQuestType | null;
  authorizationStatus: AuthorizationStatus;
}

const initialState: InitialStateType = {
  activeTheme: Theme.AllQuests,
  activeDifficultyLevel: DifficultyLevel.Any,
  quests: null,
  extendedQuest: null,
  authorizationStatus: AuthorizationStatus.Unknown,

};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveTheme, (state, action) => {
      state.activeTheme = action.payload;
    })
    .addCase(setActiveDifficultyLevel, (state, action) => {
      state.activeDifficultyLevel = action.payload;
    })
    .addCase(getQuests, (state, action) => {
      state.quests = action.payload;
    })
    .addCase(getExtendedQuest, (state, action) => {
      state.extendedQuest = action.payload;
    })

    .addCase(setAuthorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    })

});

export { reducer };
