import { AxiosInstance } from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';

import { Action, APIRoute } from '../const/actions';
import { QuestType } from '../types/quest';
import { AppDispatchType, StateType } from '../types/state';
import { getQuestInfo, getQuests } from './actions';

type asyncThunkConfig = {
  dispatch: AppDispatchType;
  state: StateType;
  extra: AxiosInstance;
};


export const fetchQuestsAction = createAsyncThunk<void, undefined, asyncThunkConfig>(
  `${Action.Quests}/fetchQuests`,
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<QuestType[]>(APIRoute.Quests);

    dispatch(getQuests(data));
  }
);
export const fetchQuestInfoAction = createAsyncThunk<void, string, asyncThunkConfig>(
  `${Action.Quest}/fetchQuestInfo`,
  async (id, { dispatch, extra: api }) => {
    const { data } = await api.get<QuestInfoType>(APIRoute.Quest.Info(id));

    dispatch(getQuestInfo(data));
  }
);
