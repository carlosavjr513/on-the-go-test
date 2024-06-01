const formatDate = (dateString: string): string => {
  const [datePart] = dateString.split(" ");
  const [day, month, year] = datePart.split("/").map(Number);
  const date = new Date(year, month - 1, day);
  const monthName = date
    .toLocaleString("pt-br", { month: "long" })
    .toUpperCase();
  return `${monthName}, ${date.getFullYear()}`;
};

const splitRunning = (running: string): [string, string] => {
  const parts = running.split("/");
  if (parts.length === 2) {
    return [parts[0], parts[1]];
  } else {
    return ["0", "0"];
  }
};

export { formatDate, splitRunning };
