const formatDate = (dateString: string): string => {
  const [datePart] = dateString.split(" ");
  const [day, month, year] = datePart.split("/").map(Number);
  const date = new Date(year, month - 1, day);
  const monthName = date
    .toLocaleString("pt-br", { month: "long" })
    .toUpperCase();
  return `${monthName}, ${date.getFullYear()}`;
};

const splitRunning = (running: string): [number, number] => {
  const [done, total] = running.split("/").map(Number);
  return [done, total];
};

export { formatDate, splitRunning };
