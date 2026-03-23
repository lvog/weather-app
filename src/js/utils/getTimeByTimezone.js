const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const getTimeByTimezone = (timezone) => {
  const now = new Date();
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const ms = utc + timezone * 1000;
  const timeInCity = new Date(ms);

  return {
    day: days[timeInCity.getDay()],
    month: months[timeInCity.getMonth()],
    date: timeInCity.getDate(),
    hours: String(timeInCity.getHours()).padStart(2, "0"),
    minutes: String(timeInCity.getMinutes()).padStart(2, "0"),
  };
};
