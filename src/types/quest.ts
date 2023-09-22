type PeopleCountType = [number, number]

type QuestType = {
  id: string;
  title: string;
  previewImg: string;
  previewImgWebp: string;
  level: DifficultyLevel
  type: Theme
  peopleMinMax: PeopleCountType
}

type ExtendedQuestType = QuestType & {
  description: string;
  coverImg: string;
  coverImgWebp: string;
}
