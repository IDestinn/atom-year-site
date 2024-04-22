import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export default function Dropbox(years: string[]) {
  const yearsSelectors = years.map((year) => (
    <SelectItem key={year} value={year}>
      {year}
    </SelectItem>
  ));
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Выбири год заявки" />
      </SelectTrigger>
      <SelectContent>{yearsSelectors}</SelectContent>
    </Select>
  );
}
