"use client";

import { ColumnDef } from "@tanstack/react-table";

export type Nominee = {
  last_name: string;
  first_name: string;
  patronymic: string | null;
  position: string;
  division: string;
  organization: string;
  subdivision: string | null;
};

export const columns: ColumnDef<Nominee>[] = [
  {
    accessorKey: "last_name",
    header: "Фамилия",
  },
  {
    accessorKey: "first_name",
    header: "Имя",
  },
  {
    accessorKey: "patronymic",
    header: "Отчество",
    cell: ({ row }) => {
      const patronymic = row.getValue("patronymic");
      return patronymic ? patronymic : "Н/Д";
    },
  },
  {
    accessorKey: "position",
    header: "Должность",
  },
  {
    accessorKey: "division",
    header: "Дивизион",
  },
  {
    accessorKey: "organization",
    header: "Организация",
  },
  {
    accessorKey: "subdivision",
    header: "Подразделение",
    cell: ({ row }) => {
      const subdivision = row.getValue("subdivision");
      return subdivision ? subdivision : "Н/Д";
    },
  },
];
