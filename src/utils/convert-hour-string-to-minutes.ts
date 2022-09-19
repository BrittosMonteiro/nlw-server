/**
 *
 * @param hourString
 */
export function convertHourStringToMinutes(hourString: string) {
  const [hours, minutes] = hourString.split(":").map(Number);
  const totalMinutes = hours * 60 + minutes;

  return totalMinutes;
}
