import type { BookingQuestType, LocationType } from './booking';

export type ReservationType = Omit<BookingQuestType, 'placeId'> & {
  id: string;
  location: LocationType;
  quest: QuestType
}
