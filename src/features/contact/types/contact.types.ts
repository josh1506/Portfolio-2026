import { ElementType } from "react";

export interface ContactLink {
  href: string;
  icon: ElementType;
  label: string;
}

export interface ContactInfo {
  name: string;
  icon: ElementType;
  label: string;
  subLabel: string;
}
