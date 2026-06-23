export type rowData = {
  id: number;
  image: string;
  title: string;
  description: string;
  additionalInfo: string[];
  link: string | null;
}

export type ContentRowProps = {
  title: string;
  data: rowData[];
};

export type ScrollDirection = "left" | "right";
