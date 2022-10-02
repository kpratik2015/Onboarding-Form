import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { Stepper } from "../../components/forms/Stepper";

interface StepperFormProps {
  hideStepper?: boolean;
  forms: React.ReactNode[];
  FinalStep: React.ReactNode;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
}

export const StepperForm = ({
  forms,
  onSubmit,
  FinalStep,
  hideStepper = false,
}: StepperFormProps) => {
  const { watch, setValue } = useFormContext();
  const currentStep = watch("currentStep");

  const incrementStep = () =>
    setValue("currentStep", Math.min(currentStep + 1, forms.length + 1));

  const onSubmitWithStep: React.FormEventHandler<HTMLFormElement> = (e) => {
    incrementStep();
    onSubmit(e);
  };

  const showStepper = !hideStepper && forms.length > 1;

  return (
    <div>
      {showStepper && (
        <div className="flex items-center justify-center py-8 sm:py-12">
          <Stepper currentStep={currentStep} maxSteps={forms.length + 1} />
        </div>
      )}
      {currentStep === forms.length + 1 ? (
        FinalStep
      ) : (
        <form onSubmit={onSubmitWithStep}>{forms[currentStep - 1]}</form>
      )}
    </div>
  );
};
