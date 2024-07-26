"use client";
import FormComponent from "@/components/BodyComponents/FormComponent/FormComponent";
import React from "react";
import {
  ButonsSignInForm,
  InputsFormValues,
  SignInInitialValues,
  SingInSchema,
  TitleFormData,
} from "./CreateAccountData";
import { parcerData, IUserDataToForm } from "./CreateAccoutHandeler";
import { useRouter } from "next/navigation";

const CreateAccountView = () => {
  const router = useRouter();

  async function handelerSubmit(data: IUserDataToForm) {
    const response = await parcerData(data);
    if (response.ok) alert("Create Account is Successfully");
    if (response.statusCode === 400) alert("Create Account Error" + response.statusCode);
    router.push("/signIn");
  }

  return (
    <section>
      <FormComponent
        iniValues={SignInInitialValues}
        valiSchema={SingInSchema}
        handelerSubmit={handelerSubmit}
        titleForm={TitleFormData}
        butonsForm={ButonsSignInForm}
        dataContructor={InputsFormValues}
      />
    </section>
  );
};

export default CreateAccountView;
