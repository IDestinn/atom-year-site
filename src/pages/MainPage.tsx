import Dropbox from "../components/Dropbox"
import RequestTable from "../components/RequestTable"

export default function MainPage() {
    const years: number[] = [2023, 2024]
    var tableInfo: TableInfo[] = [{
        id: 50,
        requestType: "Индивидуальная",
        teamName: "Кросс-функциондльная команда создавшая устойчивую систему взаимодействия с государственными и налоговыми органами",
        division: "Росатом",
        organization: "ГК Росатом",
        nomination: "Победная",
        status: "На рассмотрении",
    }]
    return (
        <>
            <div className="flex justify-between my-4 mx-6">
                <div className="mx-4 flex flex-col space-y-4">
                    {Dropbox(years)}
                    <button className="btn text-atom-gold rounded-none bg-[#273888]">Все заявки</button>
                    <button className="btn text-atom-gold rounded-none bg-[#273888]">Мои заявки</button>
                    <button className="btn text-atom-gold rounded-none bg-[#273888]">Я участник</button>
                    <button className="btn text-atom-gold rounded-none bg-[#273888]">Заявки организации</button>
                    <button className="btn text-atom-gold rounded-none bg-[#273888]">Заявки дивизиона</button>
                </div>
                <div className="mx-4 flex flex-col space-y-4">
                    <span className="flex flex-row text-right float-right justify-end">
                        <button className="btn btn-outline btn-primary rounded-none mx-5">ПАМЯТКА ПРОГРАММЫ</button>
                        <button className="btn btn-info font-bold text-atom-blue rounded-none mx-5">СОЗДАТЬ ЗАЯВКУ</button>
                    </span>
                    {RequestTable(tableInfo)}
                </div>
            </div>
        </>
    )
}