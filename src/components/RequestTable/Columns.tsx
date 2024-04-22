"use client";

import { ColumnDef } from "@tanstack/react-table";
import { User, Users } from "lucide-react";

export type Request = {
  id: number;
  is_team_type: boolean;
  project_team_name: string | null;
  division: string;
  organization: string;
  nomination_name: string;
  status: string;
};

export const columns: ColumnDef<Request>[] = [
  {
    accessorKey: "id",
    header: "ИД",
  },
  {
    accessorKey: "is_team_type",
    header: "Тип заявки",
    cell: ({ row }) => {
      const is_team_type = row.getValue("is_team_type");
      return is_team_type ? <Users /> : <User />;
    },
  },
  {
    accessorKey: "project_team_name",
    header: "Название команды проекта",
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
    accessorKey: "nomination_name",
    header: "Номинации",
  },
  {
    accessorKey: "status",
    header: "Статус заявки",
  },
];
