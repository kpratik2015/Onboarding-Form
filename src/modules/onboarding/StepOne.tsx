import Button from "../../components/buttons/Button";
import { FormHeader } from "../../components/forms/FormHeader";
import Input from "../../components/forms/Input";

export const StepOne = () => {
  return (
    <>
      <FormHeader
        title="Welcome! First things first..."
        caption="You can always change them later"
      />
      <div className="max-w-md mx-auto">
        <Input
          label="Full Name"
          placeholder="Steve Jobs"
          id="fullName"
          autoFocus
          autoComplete="name"
        />
        <Input label="Display Name" placeholder="Steve" id="displayName" />
        <Button type="submit" className="text-sm w-full justify-center">
          Create Workspace
        </Button>
      </div>
    </>
  );
};
