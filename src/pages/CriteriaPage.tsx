import CriteriaTable from "@/components/Tables/CriteriaTable/Render";
import Dropbox from "../components/Dropbox";

export default function CriteriaPage() {
  const years: string[] = ["2022", "2023", "2024"];

  return (
    <>
      <div className="mx-6 my-4 flex justify-between">
        <div className="mr-4 flex flex-col space-y-4">{Dropbox(years)}</div>
        <div className="mx-4 flex flex-col space-y-4">
          <div className="flex flex-row items-center justify-between">
            <h1 className="font-bold">Критерии</h1>
          </div>
          <CriteriaTable APIAddress="http://127.0.0.1:8000/criteria/" />
        </div>
      </div>
    </>
  );
}
