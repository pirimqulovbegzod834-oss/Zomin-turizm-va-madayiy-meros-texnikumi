
export interface Program {
  id: string;
  title: string;
  description: string;
  duration: string;
  image: string;
  category: 'Tourism' | 'Hospitality' | 'Culinary' | 'IT' | 'Forestry' | 'Production';
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}
