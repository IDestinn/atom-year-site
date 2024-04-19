import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Dropbox from "../components/Dropbox";
import RequestTable from "../components/RequestTable";
import ButtonGroup from "../components/ButtonGroup";
import { Button } from "../components/ui/button";

export default function MainPage() {
  const years: number[] = [2023, 2024];
  const queryClient = new QueryClient();

  return (
    <>
      <div className="mx-6 my-4 flex justify-between">
        <div className="mr-4 flex flex-col space-y-4">
          {Dropbox(years)}
          <ButtonGroup />
        </div>
        <div className="mx-4 flex flex-col space-y-4">
          <span className="float-right flex flex-row justify-end text-right">
            <Button>ПАМЯТКА ПРОГРАММЫ</Button>
            <Button variant="secondary">СОЗДАТЬ ЗАЯВКУ</Button>
          </span>
          <QueryClientProvider client={queryClient}>
            <RequestTable />
          </QueryClientProvider>
        </div>
      </div>
    </>
  );
}
