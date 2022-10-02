import Button from "../../components/buttons/Button";
import { FormHeader } from "../../components/forms/FormHeader";

export const FinalStep = () => {
  return (
    <div className="max-w-md mx-auto">
      <div className="flex justify-center">
        <img
          src="/images/check-icon.png"
          className="w-20 h-20 object-contain animate-bounce"
        />
      </div>
      <div>
        <FormHeader
          title="Congratulations, Eren!"
          caption="You have completed onboarding, you can start using the Eden!"
        />
        <Button className="text-sm w-full justify-center" autoFocus>
          Launch Eden
        </Button>
      </div>
    </div>
  );
};
