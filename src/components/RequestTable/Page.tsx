import { useQuery } from "@tanstack/react-query";
import { columns } from "./Columns";
import { DataTable } from "../Data-table";

export default function RequestsForm() {
  const URL = "http://127.0.0.1:8000";
  const {
    data: requests,
    isLoading,
    error,
  } = useQuery({
    queryFn: () => fetch(`${URL}/requests/`).then((res) => res.json()),
    queryKey: ["getRequests"],
  });

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>Что-то пошло не так! Повторите еще раз.{error.message}</div>;
  }

  return <DataTable columns={columns} data={requests} />;
}
