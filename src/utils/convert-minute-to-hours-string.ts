export function convertMinuteStringToHour(minuteString: number) {
  const hours = Math.floor(minuteString / 100);
  const minutes = minuteString % 60;

  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
    2,
    "0"
  )}`;
}
