import { serviceConstants } from '../constants/serviceConstants';

export function getRandomServiceID(): string {
  const randomIndex = Math.floor(Math.random() * serviceConstants.length);
  return serviceConstants[randomIndex].serviceID;
}
