"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, User, Users } from "lucide-react";
import { Button } from "../ui/button";

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
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          ИД
          <ArrowUpDown className="ml-2 size-4" />
        </Button>
      );
    },
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
    cell: ({ row }) => {
      const project_team_name = row.getValue("project_team_name");
      return project_team_name ? project_team_name : "Н/Д";
    },
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
