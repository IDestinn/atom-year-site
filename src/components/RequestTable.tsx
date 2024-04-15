import { useQuery } from "@tanstack/react-query";

export default function RequestTable() {
  const URL = "http://127.0.0.1:8000";
  const {
    data: tableInfo,
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

  const tableInfoParsed = tableInfo?.map((row: TableInfo) => (
    <tr key={row.id} className="hover border-b-atom-gold">
      <td>{row.id}</td>
      {row.is_team_type ? (
        <td>
          <GroupLogo />
        </td>
      ) : (
        <td>
          <SoloLogo />
        </td>
      )}
      <td>{row.project_team_name}</td>
      <td>{row.division}</td>
      <td>{row.organization}</td>
      <td>{row.nomination_name}</td>
      <td>{row.status}</td>
    </tr>
  ));
  return (
    <div className="overflow-x-auto">
      <table className="table text-atom-gold">
        {/* head */}
        <thead>
          <tr className="border-b-atom-gold bg-[#1e2973] text-atom-gold">
            <th>ИД</th>
            <th>Тип заявки</th>
            <th>Название команды проекта</th>
            <th>Дивизион</th>
            <th>Организация</th>
            <th>Номинация</th>
            <th>Статус заявки</th>
          </tr>
        </thead>
        <tbody>{tableInfoParsed}</tbody>
      </table>
    </div>
  );
}

interface TableInfo {
  id: number;
  is_team_type: boolean;
  project_team_name: string;
  division: string;
  organization: string;
  nomination_name: string;
  status: string;
}

function SoloLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="size-6"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GroupLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="size-6"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path
        d="M2 22C2 17.5817 5.58172 14 10 14C14.4183 14 18 17.5817 18 22H16C16 18.6863 13.3137 16 10 16C6.68629 16 4 18.6863 4 22H2ZM10 13C6.685 13 4 10.315 4 7C4 3.685 6.685 1 10 1C13.315 1 16 3.685 16 7C16 10.315 13.315 13 10 13ZM10 11C12.21 11 14 9.21 14 7C14 4.79 12.21 3 10 3C7.79 3 6 4.79 6 7C6 9.21 7.79 11 10 11ZM18.2837 14.7028C21.0644 15.9561 23 18.752 23 22H21C21 19.564 19.5483 17.4671 17.4628 16.5271L18.2837 14.7028ZM17.5962 3.41321C19.5944 4.23703 21 6.20361 21 8.5C21 11.3702 18.8042 13.7252 16 13.9776V11.9646C17.6967 11.7222 19 10.264 19 8.5C19 7.11935 18.2016 5.92603 17.041 5.35635L17.5962 3.41321Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
