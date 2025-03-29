import { serviceIDs } from "../constants/serviceIDs";

export function getRandomServiceID(): string {
    const randomIndex = Math.floor(Math.random() * serviceIDs.length);
    return serviceIDs[randomIndex];
  }