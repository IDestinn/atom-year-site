import StageStepper from "@/components/Stepper";
import { Button } from "@/components/ui/button";

export default function AddRequestPage() {
  return (
    <div className="mx-6 my-4">
      <div className="flex items-center justify-between">
        <h1 className="font-bold">Новая заявка</h1>
        <Button variant="outline">ПАМЯТКА ПРОГРАММЫ</Button>
      </div>
      <StageStepper currentStep={1} />
    </div>
  );
}
