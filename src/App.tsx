import { FormProvider, useForm } from "react-hook-form";
import MainLayout from "./components/layout/MainLayout";
import { FinalStep } from "./modules/onboarding/FinalStep";
import { StepOne } from "./modules/onboarding/StepOne";
import { StepperForm } from "./modules/onboarding/StepperForm";
import { StepThree } from "./modules/onboarding/StepThree";
import { StepTwo } from "./modules/onboarding/StepTwo";
import EdenLogo from "/images/edenlogo.png";

function App() {
  const methods = useForm({
    mode: "onTouched",
    defaultValues: {
      currentStep: 1,
    },
  });
  const { handleSubmit } = methods;

  const onSubmit = (data: { currentStep: number }) => {
    console.log("data ", data);
  };

  return (
    <MainLayout>
      <div className="overflow-hidden bg-white py-16 px-4 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-xl">
          <LogoTitle />
          <FormProvider {...methods}>
            <StepperForm
              onSubmit={handleSubmit(onSubmit)}
              FinalStep={<FinalStep />}
              forms={[<StepOne />, <StepTwo />, <StepThree />]}
            />
          </FormProvider>
        </div>
      </div>
    </MainLayout>
  );
}

const LogoTitle = () => {
  return (
    <div className="flex items-center justify-center">
      <img src={EdenLogo} className="w-10 h-10 object-contain" />
      <strong className="text-2xl">Eden</strong>
    </div>
  );
};

export default App;
