const formatDate = (dateString: string): string => {
  const [datePart] = dateString.split(" ");
  const [day, month, year] = datePart.split("/").map(Number);
  const date = new Date(year, month - 1, day);
  const monthName = date
    .toLocaleString("pt-br", { month: "long" })
    .toUpperCase();
  return `${monthName}, ${date.getFullYear()}`;
};

function formatTimelineDate(input: string): string {
  const [datePart, timePart] = input.split(" ");
  const [day, month, year] = datePart.split("/").map(Number);

  const inputDate = new Date(year, month - 1, day);
  const today = new Date();
  
  today.setHours(0, 0, 0, 0);

  if (inputDate.getTime() === today.getTime()) {
    return "Hoje";
  } else {
    return datePart;
  }
}

const splitRunning = (running: string): [number, number] => {
  const [done, total] = running.split("/").map(Number);
  return [done, total];
};

export { formatDate, formatTimelineDate, splitRunning };
