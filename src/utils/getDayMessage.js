import { dayMessage } from "../constants";

export const getDayMessasge = () => {
  const currentDay = new Date();
  const currentHour = currentDay.getHours();
  if (currentHour < 12) {
    return dayMessage.GOOD_MORNING;
  }
  if (currentHour < 18) {
    return dayMessage.GOOD_AFTERNOON;
  }

  return dayMessage.GOOD_EVENING;
};
