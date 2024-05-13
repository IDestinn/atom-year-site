import { useQuery } from "@tanstack/react-query";
import { DataTable } from "../../Data-table";
import { Nominee, columns } from "./Columns";

export default function CriteriaTable({ APIAddress }: { APIAddress: string }) {
  const { data, isLoading, isError } = useQuery<Nominee[]>({
    queryKey: ["request-data", APIAddress],
    queryFn: async () => {
      try {
        const response = await fetch(APIAddress);
        if (!response.ok) {
          throw new Error("Ошибка получения данных!");
        }
        const json = await response.json();
        return json;
      } catch (error) {
        throw new Error("Поймана ошибка..");
      }
    },
  });

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  if (isError) {
    return <div>ОШИБКА ЗАГРУЗКИ ДАННЫХ!</div>;
  }

  return <DataTable columns={columns} data={data || []} />;
}
