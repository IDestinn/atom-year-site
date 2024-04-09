import Dropbox from "../components/Dropbox";
import RequestTable from "../components/RequestTable";

export default function MainPage() {
  const years: number[] = [2023, 2024];
  const tableInfo: TableInfo[] = [
    {
      id: 50,
      requestType: "Индивидуальная",
      teamName:
        "Кросс-функциондльная команда создавшая устойчивую систему взаимодействия с государственными и налоговыми органами",
      division: "Росатом",
      organization: "ГК Росатом",
      nomination: "Победная",
      status: "На рассмотрении",
    },
  ];
  return (
    <>
      <div className="mx-6 my-4 flex justify-between">
        <div className="mr-4 flex flex-col space-y-4">
          {Dropbox(years)}
          <button className="btn rounded-none bg-[#273888] text-atom-gold">
            Все заявки
          </button>
          <button className="btn rounded-none bg-[#273888] text-atom-gold">
            Мои заявки
          </button>
          <button className="btn rounded-none bg-[#273888] text-atom-gold">
            Я участник
          </button>
          <button className="btn rounded-none bg-[#273888] text-atom-gold">
            Заявки организации
          </button>
          <button className="btn rounded-none bg-[#273888] text-atom-gold">
            Заявки дивизиона
          </button>
        </div>
        <div className="mx-4 flex flex-col space-y-4">
          <span className="float-right flex flex-row justify-end text-right">
            <button className="btn btn-outline btn-primary mx-5 rounded-none">
              ПАМЯТКА ПРОГРАММЫ
            </button>
            <button className="btn btn-info mx-5 rounded-none font-bold text-atom-blue">
              СОЗДАТЬ ЗАЯВКУ
            </button>
          </span>
          {RequestTable(tableInfo)}
        </div>
      </div>
    </>
  );
}
