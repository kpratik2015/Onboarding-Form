import clsxm from "../../utils/clsxm";

interface StepperProps {
  maxSteps: number;
  currentStep: number;
}

export const Stepper = ({ maxSteps, currentStep }: StepperProps) => {
  const steps = Array.from({ length: maxSteps });

  return (
    <nav aria-label="Progress">
      <ol role="list" className="flex items-center">
        {steps.map((_, stepIdx) => {
          const step = stepIdx + 1;
          const isComplete = step < currentStep;
          const isCurrent = step === currentStep;
          const isUpcoming = step > currentStep;
          return (
            <li
              key={stepIdx}
              className={clsxm(
                stepIdx !== steps.length - 1 ? "pr-8 sm:pr-20" : "",
                "relative"
              )}
            >
              <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                {isCurrent && (
                  <div className="absolute left-4 h-0.5 w-1/2 bg-primary-400" />
                )}
                <div
                  className={clsxm(
                    "h-0.5 w-full",
                    isComplete ? "bg-primary-400" : "bg-gray-200"
                  )}
                />
              </div>
              <div
                className={clsxm(
                  "relative flex h-8 w-8 items-center justify-center rounded-full",
                  [
                    isComplete && ["bg-primary-400 text-white"],
                    isCurrent && [
                      "bg-primary-400 border-2 border-indigo-600 text-white",
                    ],
                    isUpcoming && ["border-2 border-gray-200 bg-white "],
                  ]
                )}
              >
                <span className="text-xs">{stepIdx + 1}</span>
              </div>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
