import Dropbox from "../components/Dropbox"
import RequestTable from "../components/RequestTable"

export default function MainPage() {
    const years: number[] = [2023, 2024]
    return (
        <>
            <div className="m-7">
                {Dropbox(years)}
            </div>
            <RequestTable/>
        </>
    )
}