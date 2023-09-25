import { AxiosInstance } from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';

import { Action, APIRoute } from '../const/actions';
import { ScheduleType } from '../types/booking';
import { QuestInfoType, QuestType } from '../types/quest';
import { AppDispatchType, StateType } from '../types/state';
import {
  getBookingInfo,
  getQuestInfo,
  getQuests,
  setBookingInfoLoadingStatus,
  setQuestLoadingStatus,
  setQuestsLoadingStatus,
} from './actions';

type asyncThunkConfig = {
  dispatch: AppDispatchType;
  state: StateType;
  extra: AxiosInstance;
};


export const fetchQuestsAction = createAsyncThunk<void, undefined, asyncThunkConfig>(
  `${Action.Quests}/fetchQuests`,
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setQuestsLoadingStatus(true));

    const { data } = await api.get<QuestType[]>(APIRoute.Quests);

    dispatch(getQuests(data));
    dispatch(setQuestsLoadingStatus(false));
  }
);
export const fetchQuestInfoAction = createAsyncThunk<void, string, asyncThunkConfig>(
  `${Action.Quest}/fetchQuestInfo`,
  async (id, { dispatch, extra: api }) => {
    dispatch(setQuestLoadingStatus(true));

    const { data } = await api.get<QuestInfoType>(APIRoute.Quest.Info(id));

    dispatch(getQuestInfo(data));
    dispatch(setQuestLoadingStatus(false));
  }
);

export const fetchBookingInfoAction = createAsyncThunk<void, string, asyncThunkConfig>(
  `${Action.Quest}/fetchQuestInfo`,
  async (id, { dispatch, extra: api }) => {
    dispatch(setBookingInfoLoadingStatus(true));

    const { data } = await api.get<ScheduleType[]>(APIRoute.Quest.Booking(id));

    dispatch(getBookingInfo(data));
    dispatch(setBookingInfoLoadingStatus(false));
  }
);
