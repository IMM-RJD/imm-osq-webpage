export interface Person {
  id: number;
  imgSrc: string;
  imgAlt?: string;
  imgPosition?: string;
  funkyStyles?: boolean;
  firstName: string;
  lastName: string;
  role: { en: string; de: string };
  description: { en: string; de: string };
  phone?: string;
  email?: string;
  homepage?: string;
  homepageText?: string;
  facebook?: string;
  instagram?: string;
  youtube?: string;
  soundcloud?: string;
  github?: string;
  socialOrder?: string;
}
export interface Event {
  id: number;
  imgSrc: string;
  imgPosition?: string;
  imgContainerWidth?: string;
  title: string;
  date: Date;
  dateText?: string;
  link?: string;
  linkText?: string;
  location: string;
  description?: string;
  phone?: string;
  email?: string;
  emailText?: string;
  expanded?: boolean;
  allowShare?: boolean;
  canceled?: boolean;
}
export interface Shoutout {
  id: number;
  imgSrc: string;
  imgAlt?: string;
  imgPosition?: string;
  funkyStyles?: boolean;
  title: { en: string; de: string };
  subtitle?: { en: string; de: string };
  expanded?: boolean;
  description: { en: string; de: string };
  phone?: string;
  email?: string;
  homepage?: string;
  homepageText?: string;
  facebook?: string;
  instagram?: string;
  youtube?: string;
  soundcloud?: string;
  github?: string;
  socialOrder?: string;
}
