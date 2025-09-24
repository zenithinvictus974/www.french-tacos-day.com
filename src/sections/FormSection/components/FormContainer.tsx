import { FormImage } from "@/sections/FormSection/components/FormImage";
import { ParticipationForm } from "@/sections/FormSection/components/ParticipationForm";
import { LegalText } from "@/sections/FormSection/components/LegalText";

export const FormContainer = () => {
  return (
    <div className="box-border caret-transparent max-w-4xl w-full px-4">
      <FormImage />
      <ParticipationForm />
      <LegalText />
    </div>
  );
};
