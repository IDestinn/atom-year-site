import { ColumnDef } from "@tanstack/react-table";

export type Criterion = {
  name: string;
  nomination_name: string;
  nomination_type: string;
  criteria_type: string;
  description: string;
  editor: string | null;
  creator: string;
};

export const columns: ColumnDef<Criterion>[] = [
  {
    accessorKey: "name",
    header: "Название",
  },
  {
    accessorKey: "nomination_name",
    header: "Номинация",
  },
  {
    accessorKey: "nomination_type",
    header: "Тип номинации",
  },
  {
    accessorKey: "criteria_type",
    header: "Тип критерия",
  },
  {
    accessorKey: "description",
    header: "Описание",
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
