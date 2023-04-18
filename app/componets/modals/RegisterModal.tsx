"use client"

import useRegisterModal from "@/app/hooks/useRegisterModal";
import Modal from "./Modal"
import Heading from "../Heading";
import Button from "../Button";
import axios from "axios";

import { useState } from "react";
import { useForm, SubmitHandler,FieldValues } from "react-hook-form";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import Input from "../inputs/Input";


const RegisterModal = () => {
  const registerModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({ 
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  });
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    axios.post('/api/register', data)
    .then(() => {
      registerModal.onClose;
    })
    .catch((error) => {
        console.log(error);
      })
      .finally(() =>{
        setIsLoading(false);
      })
  }
  // const onToggle = useCallback(() => {
  //   registerModal.onClose();
  //   loginModal.onOpen();
  // }, [registerModal, loginModal])

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading
       title="Welcome to Airbnb"
       subtitle="Create an account!"
      />
      <Input
       id="email"
       label="Email"
       disabled={isLoading}
       register={register}
       errors={errors}
       required
      />
       <Input
        id="name"
        label="Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        label="Password"
        type="password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  )
      const footerContent = (
        <div className="flex flex-col gap-4 mt-3">
          <hr />
          <Button 
            outline 
            label="Continue with Google"
            icon={FcGoogle}
            onClick={()=>{}}
          />
          <Button 
            outline 
            label="Continue with Github"
            icon={AiFillGithub}
            onClick={()=>{}}
           
          />
          <div 
            className="
              text-neutral-500 text-center mt-4 font-light"
          >
            <p>Already have an account?
              <span 
                
                className="
                  text-neutral-800 cursor-pointer hover:underline"
                > Log in</span>
            </p>
          </div>
        </div>
      
  )
  return (
    <Modal 
    title="Register"
    disabled={isLoading}
    onClose={registerModal.onClose}
    isOpen={registerModal.isOpen}
    onSubmit={handleSubmit(onSubmit)}
    body={bodyContent}
    footer={footerContent}
    actionLabel="Continue"

    />
  )
}

export default RegisterModal