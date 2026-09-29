export interface Course {
  id: number;
  title: string;
  author: string;
  thumbnail: string;
  rating: number;
  lessonsCount: number;
  duration: string;
  commentsCount: number;
  level: string;
  price: number;
  priceType: string;
  enrolledBadge: string;
  studentAvatars: string[];
}
