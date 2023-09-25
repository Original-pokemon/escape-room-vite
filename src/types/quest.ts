import { DifficultyLevel, Theme } from '../const/filter';

type PeopleCountType = [number, number]

export type QuestType = {
  id: string;
  title: string;
  previewImg: string;
  previewImgWebp: string;
  level: DifficultyLevel;
  type: Theme;
  peopleMinMax: PeopleCountType;
}

export type QuestInfoType = QuestType & {
  description: string;
  coverImg: string;
  coverImgWebp: string;
}
