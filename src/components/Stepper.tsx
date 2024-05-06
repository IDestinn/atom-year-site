import React from "react";

export default function StageStepper({ currentStep }: { currentStep: number }) {
  const steps: {
    label: string;
    tooltip?: string;
  }[] = [
    { label: "I Этап" },
    { label: "1.\nСоздание", tooltip: "Some Tooltip" },
    { label: "2.\nСогласование секретарём организации" },
    { label: "3.\nСогласование руководителем номинанта" },
    { label: "4.1\nОпределение финалистов организации" },
    { label: "4.2\nОпределение финалистов от УК" },
    { label: "II Этап" },
    { label: "5.\nСогласование секретарём дивизиона" },
    { label: "6.\nСогласование пресс-секретарём" },
    { label: "7.\nОпределение финалистов дивизиона" },
    { label: "III Этап" },
    { label: "8.\nСогласование контролёром СБ" },
    { label: "9.\nПередано в ГК" },
    { label: "10.\nСогласовано в ГК" },
    { label: "Финал" },
  ];
  const activeColor = (index: number) =>
    currentStep >= index
      ? "bg-foreground"
      : "bg-background border border-gray-500";
  const isFinalStep = (index: number) => index === steps.length - 1;

  return (
    <div className="my-4 flex items-center justify-center">
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <div
            className={`size-6 rounded-full border-2 ${activeColor(index)}`}
          ></div>
          {isFinalStep(index) ? null : (
            <div className={`h-0.5 w-12 ${activeColor(index)}`}></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
