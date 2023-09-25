import { createReducer } from '@reduxjs/toolkit';

import { AuthorizationStatus } from '../const/authorization-status';
import { DifficultyLevel, Theme } from '../const/filter';
import { ScheduleType } from '../types/booking';
import { QuestInfoType, QuestType } from '../types/quest';
import {
  getBookingInfo,
  getQuestInfo,
  getQuests,
  setActiveDifficultyLevel,
  setActiveTheme,
  setAuthorizationStatus,
  setBookingInfoLoadingStatus,
  setQuestLoadingStatus,
  setQuestsLoadingStatus,
} from './actions';

type InitialStateType = {
  activeTheme: string;
  activeDifficultyLevel: string;
  quests: QuestType[] | null;
  questInfo: QuestInfoType | null;
  bookingInfo: ScheduleType[] | null;
  authorizationStatus: AuthorizationStatus;
  isQuestsDataLoading: boolean;
  isQuestDataLoading: boolean;
  isBookingDataLoading: boolean;
}

const initialState: InitialStateType = {
  activeTheme: Theme.AllQuests,
  activeDifficultyLevel: DifficultyLevel.Any,
  quests: null,
  questInfo: null,
  bookingInfo: null,
  authorizationStatus: AuthorizationStatus.Unknown,
  isQuestsDataLoading: false,
  isQuestDataLoading: false,
  isBookingDataLoading: false,
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
      state.questInfo = action.payload;
    })
    .addCase(setAuthorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setQuestsLoadingStatus, (state, action) => {
      state.isQuestsDataLoading = action.payload;
    })
    .addCase(setQuestLoadingStatus, (state, action) => {
      state.isQuestDataLoading = action.payload;
    })
    .addCase(getBookingInfo, (state, action) => {
      state.bookingInfo = action.payload;
    })
    .addCase(setBookingInfoLoadingStatus, (state, action) => {
      state.isBookingDataLoading = action.payload;
    });
});

export { reducer };
