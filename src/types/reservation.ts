import type { BookingQuestType, LocationType } from './booking';
import { QuestType } from './quest';

export type ReservationType = Omit<BookingQuestType, 'placeId'> & {
  id: string;
  location: LocationType;
  quest: QuestType;
}
