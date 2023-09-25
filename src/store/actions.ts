import { Theme } from 'react-toastify';

import { createAction } from '@reduxjs/toolkit';

import { Action } from '../const/actions';
import { AuthorizationStatus } from '../const/authorization-status';
import { DifficultyLevel } from '../const/filter';
import { ScheduleType } from '../types/booking';
import { QuestInfoType, QuestType } from '../types/quest';

const setActiveTheme = createAction<Theme>(`${Action.Quests}/setActiveTheme`);
const setActiveDifficultyLevel = createAction<DifficultyLevel>(`${Action.Quests}/setActiveDifficultyLevel`);
const getQuests = createAction<QuestType[]>(`${Action.Quests}/getQuests`);
const getQuestInfo = createAction<QuestInfoType>(`${Action.Quest}/getQuestInfo`);
const getBookingInfo = createAction<ScheduleType[]>(`${Action.Booking}/getBookingInfo`);
const setAuthorizationStatus = createAction<AuthorizationStatus>(`${Action.User}/setAuthorizationStatus`);
const setQuestsLoadingStatus = createAction<boolean>(`${Action.Data}/setOffersLoadingStatus`);
const setQuestLoadingStatus = createAction<boolean>(`${Action.Data}/setQuestLoadingStatus`);
const setBookingInfoLoadingStatus = createAction<boolean>(`${Action.Data}/setBookingInfoLoadingStatus`);

export {
  getBookingInfo,
  getQuestInfo,
  getQuests,
  setActiveDifficultyLevel,
  setActiveTheme,
  setAuthorizationStatus,
  setBookingInfoLoadingStatus,
  setQuestLoadingStatus,
  setQuestsLoadingStatus,
};
