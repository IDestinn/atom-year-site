export default function RequestTable() {
    var tableInfo: TableInfo[] = [{
        id: 50,
        requestType: "Груповой",
        teamName: "Кросс-функциондльная команда создавшая устойчивую систему взаимодействия с государственными и налоговыми органами",
        division: "Росатом",
        organization: "ГК Росатом",
        nomination: "Победная",
        status: "На рассмотрении",
    }]
    const tableInfoParsed = tableInfo.map(row =>
        <tr key={row.id} className="hover">
            <td>{row.id}</td>
            <td>{row.requestType}</td>
            <td>{row.teamName}</td>
            <td>{row.division}</td>
            <td>{row.organization}</td>
            <td>{row.nomination}</td>
            <td>{row.status}</td>
        </tr>
    )
    return (
        <div className="overflow-x-auto">
            <table className="table text-atom-gold">
                {/* head */}
                <thead>
                    <tr className="text-atom-gold">
                        <th>ИД</th>
                        <th>Тип заявки</th>
                        <th>Название команды проекта</th>
                        <th>Дивизион</th>
                        <th>Организация</th>
                        <th>Номинация</th>
                        <th>Статус заявки</th>
                    </tr>
                </thead>
                <tbody>
                    {tableInfoParsed}
                </tbody>
            </table>
        </div>
    );
}

type TableInfo = {
    id: number;
    requestType: string;
    teamName: string;
    division: string;
    organization: string;
    nomination: string;
    status: string;
}