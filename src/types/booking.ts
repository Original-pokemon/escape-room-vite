export type LocationType = {
  address: string;
  coords: [number, number];
}

type TimeSlotType = {
  time: string;
  isAvailable: boolean;
}

type BookingDateType = 'today' | 'tomorrow'

type SlotListType = {
  [K in BookingDateType]: TimeSlotType[];
}

export type ScheduleType = {
  id: string;
  location: LocationType;
  slots: SlotListType;
}

export type BookingQuestType = {
  date: BookingDateType
  time: string
  contactPerson: string
  phone: string
  withChildren: boolean
  peopleCount: number
  placeId: string
}
