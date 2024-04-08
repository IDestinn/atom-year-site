export default function Dropbox(years: number[]) {
    const yearsHTML = years.map(year =>
        <option key={year}>{year}</option>
    );
    return (
        <select className="select-md w-max bg-[#1e2973] shadow-md text-atom-gold font-bold">
            {yearsHTML}
        </select>
    );
}

