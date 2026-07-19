export interface NewsItem {
  id: number;
  status: string;
  user_created?: string;
  date_created: string;
  user_updated?: string | null;
  date_updated?: string | null;
  title: string;
  content: string;
  image: string; // Directus asset UUID
}

export interface Service {
  id: number;
  status: string;
  user_created?: string;
  date_created: string;
  user_updated?: string | null;
  date_updated?: string | null;
  title: string;
  description: string;
  image: string; // Directus asset UUID
}

export interface TeamMember {
  id: number;
  status: string;
  date_created: string;
  date_updated?: string | null;
  name: string;
  position: string;
  image: string; // Directus asset UUID
}

export interface DirectusSchema {
  News: NewsItem[];
  Services: Service[];
  Team_Members: TeamMember[];
}
