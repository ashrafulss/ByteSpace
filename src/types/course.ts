export interface Course {
  id: string | number;
  title: string;
  thumbnail: string;
  lessonsCount: number;
  duration: string;
  commentsCount: number;
  author: string;
  rating: number | string; // Allow both number and string
  level: string;
  studentAvatars: string[];
  enrolledBadge: string | number;
  price: number | string; // Allow both number and string
  priceType?: string;
}
