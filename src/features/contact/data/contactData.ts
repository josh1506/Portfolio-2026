import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaTiktok,
  FaRegCalendar,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

import type { ContactLink, ContactInfo } from "../types/contact.types";

export const contactLinks: ContactLink[] = [
  {
    href: "https://github.com/josh1506",
    icon: FaGithub,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/joshjabor/",
    icon: FaLinkedin,
    label: "LinkedIn",
  },
  {
    href: "https://www.facebook.com/joshuamichael.jabor/",
    icon: FaFacebook,
    label: "Facebook",
  },
  {
    href: "https://www.tiktok.com/@creativeworks3d",
    icon: FaTiktok,
    label: "TikTok",
  },
];

export const contactInfoList: ContactInfo[] = [
  {
    name: "location",
    icon: FaLocationDot,
    label: "Philippines",
    subLabel: "Based in Philippines",
  },
  {
    name: "availability",
    icon: FaRegCalendar,
    label: "Available for Work",
    subLabel: "Open to new opportunities",
  },
];
