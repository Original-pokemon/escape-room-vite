import { Theme } from 'react-toastify';

import { createAction } from '@reduxjs/toolkit';

import { Action } from '../const/actions';
import { AuthorizationStatus } from '../const/authorization-status';
import { DifficultyLevel } from '../const/filter';
import { QuestInfoType, QuestType } from '../types/quest';

const setActiveTheme = createAction<Theme>(`${Action.Quests}/setActiveTheme`);
const setActiveDifficultyLevel = createAction<DifficultyLevel>(`${Action.Quests}/setActiveDifficultyLevel`);
const getQuests = createAction<QuestType[]>(`${Action.Quests}/getQuests`);
const getQuestInfo = createAction<QuestInfoType>(`${Action.Quest}/getQuestInfo`);
const setAuthorizationStatus = createAction<AuthorizationStatus>(`${Action.User}/setAuthorizationStatus`);

export {
  getQuestInfo,
  getQuests,
  setActiveDifficultyLevel,
  setActiveTheme,
  setAuthorizationStatus,
};
