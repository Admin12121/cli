import React from "react";
import { useForm } from "react-hook-form";
import {
  FormGenerator,
  FormProps,
} from "@/registry/default/global/form-generator";
import GlassCard from "@/registry/default/global/glass-card";
import { Button } from "@/components/ui/button";

const FormGeneraterDemo = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <GlassCard
      container="flex flex-col items-center min-w-[300px]"
      gradient="w-4/12 h-2/6 opacity-40"
      className="xs:w-full p-7 mt-16 overflow-hidden relative !min-w-[300px] max-w-[450px] flex flex-col gap-3"
    >
      <h5 className="font-bold text-base text-themeTextWhite">Signup</h5>
      <p className="text-themeTextGray leading-tight">
        Network with people from around the world, join groups, create your own,
        watch courses and become the best version of yourself.
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-1">
        {SIGN_UP_FORM.map((field) => (
          <FormGenerator
            {...field}
            key={field.id}
            register={register}
            watch={watch}
            errors={errors}
          />
        ))}
        <Button
          type="submit"
          className="rounded-md border-2 border-neutral-800"
        >
          Sign In
        </Button>
      </form>
    </GlassCard>
  );
};

export default FormGeneraterDemo;

export const SIGN_UP_FORM: FormProps[] = [
  {
    id: "1",
    inputType: "input",
    placeholder: "First name",
    name: "firstname",
    type: "text",
  },
  {
    id: "2",
    inputType: "input",
    placeholder: "Last name",
    name: "lastname",
    type: "text",
  },
  {
    id: "3",
    inputType: "input",
    placeholder: "Email",
    name: "email",
    type: "email",
  },
  {
    id: "4",
    inputType: "input",
    placeholder: "Password",
    name: "password",
    type: "password",
    indicator: "inline",
  },
];
