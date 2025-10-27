export const dayConvert = (day: number) => {
  if (day === 0) return "일요일";
  if (day === 1) return "월요일";
  if (day === 2) return "화요일";
  if (day === 3) return "수요일";
  if (day === 4) return "목요일";
  if (day === 5) return "금요일";
  if (day === 6) return "토요일";
};
