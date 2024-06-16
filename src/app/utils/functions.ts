const formatDate = (dateString: string): string => {
  const [datePart] = dateString.split(" ");
  const [day, month, year] = datePart.split("/").map(Number);
  const date = new Date(year, month - 1, day);
  const monthName = date
    .toLocaleString("pt-br", { month: "long" })
    .toUpperCase();
  return `${monthName}, ${date.getFullYear()}`;
};

function formatTimelineDate(input: string): { formattedDate: string; toolTipDate: string } {
  const [datePart, timePart] = input.split(" ");
  const [day, month, year] = datePart.split("/").map(Number);

  const inputDate = new Date(year, month - 1, day);
  const today = new Date();

  today.setHours(0, 0, 0, 0);

  const oneDay = 24 * 60 * 60 * 1000;
  const diffDays = Math.round((today.getTime() - inputDate.getTime()) / oneDay);

  let formattedDate;

  if (diffDays === 0) {
    formattedDate = "Hoje";
  } else if (diffDays === 1) {
    formattedDate = "Ontem";
  } else if (diffDays === 2) {
    formattedDate = `${diffDays} dias atrás`;
  } else if (diffDays < 30) {
    const weeks = Math.floor(diffDays / 7);
    formattedDate = `${weeks} ${weeks === 1 ? "semana" : "semanas"} atrás`;
  } else if (diffDays < 365) {
    const months = Math.floor(diffDays / 30);
    formattedDate = `${months} ${months === 1 ? "mês" : "meses"} atrás`;
  } else {
    const years = Math.floor(diffDays / 365);
    formattedDate = `${years} ${years === 1 ? "ano" : "anos"} atrás`;
  }

  return { formattedDate, toolTipDate: datePart };
}

const splitRunning = (running: string): [number, number] => {
  const [done, total] = running.split("/").map(Number);
  return [done, total];
};

export { formatDate, formatTimelineDate, splitRunning };

