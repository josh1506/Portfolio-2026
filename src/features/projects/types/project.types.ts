export type Project = {
  id: number;
  image: string;
  title: string;
  description: string;
  additionalInfo: string[];
  link: string | null;
  isFeatured: boolean;
};
