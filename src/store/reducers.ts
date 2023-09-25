import { createReducer } from '@reduxjs/toolkit';

import { AuthorizationStatus } from '../const/authorization-status';
import { DifficultyLevel, Theme } from '../const/filter';
import {
  getQuestInfo,
  getQuests,
  setActiveDifficultyLevel,
  setActiveTheme,
  setAuthorizationStatus,
} from './actions';

type InitialStateType = {
  activeTheme: Theme;
  activeDifficultyLevel: DifficultyLevel;
  quests: QuestType[] | null;
  QuestInfo: QuestInfoType | null;
  authorizationStatus: AuthorizationStatus;
}

const initialState: InitialStateType = {
  activeTheme: Theme.AllQuests,
  activeDifficultyLevel: DifficultyLevel.Any,
  quests: null,
  QuestInfo: null,
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
    .addCase(getQuestInfo, (state, action) => {
      state.QuestInfo = action.payload;
    })

    .addCase(setAuthorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    });

});

export { reducer };
