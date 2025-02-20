export interface CityData {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}

export interface TripsData {
  id: number;
  title: string;
  imageUrl: string | null;
  cities: CityData[];
  startDate: string;
  endDate: string;
  description?: string | null;
}

export interface DateRangeData {
  startDate: string | null;
  endDate: string | null;
}

export interface NewTripData {
  startDate: string | null;
  endDate: string | null;
  cityIds: number[];
}

export interface RecommendedTripsData {
  title: string;
  trips: CommunityTripsItemData[];
}

export interface CommunityTripsData {
  lastPageIndex: number;
  trips: CommunityTripsItemData[];
}

export interface CommunityTripsItemData extends TripsData {
  writer: {
    nickname: string;
    imageUrl: string;
  };
  description: string | null;
  likeCount: number;
  isLike: boolean;
}
