import Button from "../../components/buttons/Button";
import { FormHeader } from "../../components/forms/FormHeader";
import Input from "../../components/forms/Input";

export const StepTwo = () => {
  return (
    <>
      <FormHeader
        title="Let's set up a home for all your work"
        caption="You can always create another workspace later."
      />
      <div className="max-w-md mx-auto">
        <Input label="Workspace Name" placeholder="Eden" id="workspaceName" />
        <Input
          label="Workspace URL"
          helperText="(optional)"
          placeholder="Example"
          id="workspaceUrl"
          type="url"
          leftRender={
            <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm">
              www.eden.com/
            </span>
          }
        />
        <Button type="submit" className="text-sm w-full justify-center">
          Create Workspace
        </Button>
      </div>
    </>
  );
};
