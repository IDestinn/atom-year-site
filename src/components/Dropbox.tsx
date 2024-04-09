export default function Dropbox(years: number[]) {
  const yearsHTML = years.map((year) => <option key={year}>{year}</option>);
  return (
    <select
      id="year-selector"
      className="select-md w-max bg-[#1e2973] font-bold text-atom-gold shadow-md"
    >
      {yearsHTML}
    </select>
  );
}
