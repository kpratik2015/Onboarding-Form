import { RadioGroup } from "@headlessui/react";
import { useFormContext } from "react-hook-form";
import Button from "../../components/buttons/Button";
import { FormHeader } from "../../components/forms/FormHeader";
import clsxm from "../../utils/clsxm";
import "./StepThree.css";
import SingleAvatarAsset from "/images/single-avatar.png";
import MultiAvatarAsset from "/images/multi-avatar.png";

export const StepThree = () => {
  const { watch, setValue } = useFormContext();
  const currentUsage = watch("usage");
  const usageOptions = [
    {
      id: 1,
      title: "For myself",
      description: "Write better. Think more clearly. Stay organized.",
      icon: SingleAvatarAsset,
    },
    {
      id: 2,
      title: "With my team",
      description: "Wikis, docs, tasks & projects, all in one place.",
      icon: MultiAvatarAsset,
    },
  ] as const;
  return (
    <>
      <FormHeader
        title="How are you planning to use Eden?"
        caption="We'll streamline your setup experience accordingly."
      />
      <div className="max-w-md mx-auto">
        <RadioGroup
          value={currentUsage}
          onChange={(val) => setValue("usage", val)}
        >
          <div className="flex flex-col sm:flex-row gap-4 pb-4">
            {usageOptions.map((option) => (
              <RadioGroup.Option
                value={option.title}
                key={option.id}
                className={({ checked, active }) =>
                  clsxm(
                    checked ? "border-transparent" : "border-gray-300",
                    active ? "border-primary-400 ring ring-primary-400" : "",
                    "relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none aspect-[4/3] max-h-36 sm:max-h-full"
                  )
                }
              >
                {({ checked, active }) => (
                  <div>
                    <div className="-ml-3.5">
                      <img src={option.icon} className="filter" />
                    </div>
                    <span className="flex flex-1">
                      <span className="flex flex-col">
                        <RadioGroup.Label
                          as="span"
                          className="block text-sm font-semibold text-gray-900"
                        >
                          {option.title}
                        </RadioGroup.Label>
                        <RadioGroup.Description
                          as="span"
                          className="mt-1 flex items-center text-sm text-gray-500"
                        >
                          {option.description}
                        </RadioGroup.Description>
                      </span>
                    </span>
                    <span
                      className={clsxm(
                        active ? "border" : "border-2",
                        checked ? "border-primary-400" : "border-transparent",
                        "pointer-events-none absolute -inset-px rounded-lg"
                      )}
                      aria-hidden="true"
                    />
                  </div>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
        <Button type="submit" className="text-sm w-full justify-center">
          Create Workspace
        </Button>
      </div>
    </>
  );
};
