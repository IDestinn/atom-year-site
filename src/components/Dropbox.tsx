import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from "@/components/ui/select";

export default function Dropbox(years: number[]) {
  const yearsSelectors = years.map((year) => (
    <SelectItem value={year}>{year}</SelectItem>
  ));
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Выбири год заявки" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Год</SelectLabel>
          {yearsSelectors}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
