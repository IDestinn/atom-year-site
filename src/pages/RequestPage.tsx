import Dropbox from "../components/Dropbox";
import ButtonGroup from "../components/ButtonGroup";
import { Button } from "../components/ui/button";
import RequestTable from "@/components/RequestTable/Render";

export default function RequestPage() {
  const years: string[] = ["2022", "2023", "2024"];

  return (
    <>
      <div className="mx-6 my-4 flex justify-between">
        <div className="mr-4 flex flex-col space-y-4">
          {Dropbox(years)}
          <ButtonGroup />
        </div>
        <div className="mx-4 flex flex-col space-y-4">
          <div className="flex flex-row items-center justify-between">
            <h1 className="font-bold">ЗАЯВКИ</h1>
            <span className="float-right justify-end text-right">
              <Button>ПАМЯТКА ПРОГРАММЫ</Button>
              <Button variant="secondary">СОЗДАТЬ ЗАЯВКУ</Button>
            </span>
          </div>
          <RequestTable APIAddress="http://127.0.0.1:8000/requests/" />
        </div>
      </div>
    </>
  );
}
