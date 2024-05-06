import Dropbox from "../components/Dropbox";
import NomineeTable from "@/components/Tables/NomineeTable/Render";

export default function NomineePage() {
  const years: string[] = ["2022", "2023", "2024"];

  return (
    <>
      <div className="mx-6 my-4 flex justify-between">
        <div className="mr-4 flex flex-col space-y-4">{Dropbox(years)}</div>
        <div className="mx-4 flex flex-col space-y-4">
          <div className="flex flex-row items-center justify-between">
            <h1 className="font-bold">НОМИНАНТЫ</h1>
          </div>
          <NomineeTable APIAddress="http://127.0.0.1:8000/employees/" />
        </div>
      </div>
    </>
  );
}
