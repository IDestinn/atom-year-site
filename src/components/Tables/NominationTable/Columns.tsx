import { ColumnDef } from "@tanstack/react-table";
import { User, Users } from "lucide-react";

export type Nomination = {
  is_team_type: boolean;
  name: string;
  type: string;
  division: string | null;
  management_company: string | null;
  editor: string | null;
  creator: string;
};

export const columns: ColumnDef<Nomination>[] = [
  {
    accessorKey: "is_team_type",
    header: "Тип заявки",
    cell: ({ row }) => {
      const is_team_type = row.getValue("is_team_type");
      return is_team_type ? <Users /> : <User />;
    },
  },
  {
    accessorKey: "name",
    header: "Название",
  },
  {
    accessorKey: "type",
    header: "Тип номинации",
  },
  {
    accessorKey: "division",
    header: "Дивизион",
    cell: ({ row }) => {
      const division = row.getValue("division");
      return division ? division : "Н/Д";
    },
  },
  {
    accessorKey: "management_company",
    header: "Управляющая организация",
    cell: ({ row }) => {
      const management_company = row.getValue("management_company");
      return management_company ? management_company : "Н/Д";
    },
  },
  {
    accessorKey: "editor",
    header: "Редактор",
    cell: ({ row }) => {
      const editor = row.getValue("editor");
      return editor ? editor : "Н/Д";
    },
  },
  {
    accessorKey: "creator",
    header: "Создатель",
  },
];
