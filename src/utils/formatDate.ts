const formatDate = (date: Date): string => {
  const dateParse = new Date(date);
  const day = `0${dateParse.getDate()}`.slice(-2);
  const mouth = `0${dateParse.getMonth() + 1}`.slice(-2);
  const year = dateParse.getFullYear();

  return `${day}/${mouth}/${year}`;
};
export default formatDate;
