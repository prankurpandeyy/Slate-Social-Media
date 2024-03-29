import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    fullName: "Tanay Pratap",
    username: "tanaypratap",
    password: "tanaypratap123",
    bio: "CTO Invact",
    link: "https://linkedin.com/in/tanaypratap/",
    avatar:
      "https://raw.githubusercontent.com/iprankurpandey/github-imagehosting/main/tanay.jpg",
    bgImg:
      "https://raw.githubusercontent.com/iprankurpandey/github-imagehosting/main/undraw_video_files_fu10.png",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    fullName: "Naman Saxena ",
    username: "namansaxena",
    password: "namansaxena123",
    bio: "Sr Software Engineer",
    link: "https://linkedin.com/in/namansaxena/",
    avatar:
      "https://raw.githubusercontent.com/iprankurpandey/github-imagehosting/main/naman.jpeg",
    bgImg:
      "https://raw.githubusercontent.com/iprankurpandey/github-imagehosting/main/undraw_social_networking_re_i1ex.svg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    fullName: "Adarsh Patel",
    username: "adarshpatel",
    password: "adarshpatel123",
    bio: "Software Engineer",
    link: "https://linkedin.com/in/adarshpatel/",
    avatar:
      "https://raw.githubusercontent.com/iprankurpandey/github-imagehosting/main/adarshpateldev.jpeg",
    bgImg:
      "https://raw.githubusercontent.com/iprankurpandey/github-imagehosting/main/undraw_server_down_s4lk.png",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    fullName: "Prankur Pandey",
    username: "iprankurpandey",
    password: "prankurpandey123",
    bio: "Frontend Engineer",
    link: "https://linkedin.com/in/prankurnov15/",
    avatar:
      "https://raw.githubusercontent.com/iprankurpandey/github-imagehosting/main/prankur.png",
    bgImg:
      "https://raw.githubusercontent.com/iprankurpandey/github-imagehosting/main/undraw_taking_notes_re_bnaf.svg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
