"use client";
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { PiEnvelopeSimpleFill } from 'react-icons/pi';
import { IoIosLock, IoIosEyeOff, IoIosEye } from 'react-icons/io';
import {
  Input,
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Button,
} from '@/components/ui';
import { loginSchemaType } from './types';
import { loginSchema } from './schemas/index';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const form = useForm<loginSchemaType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      correo: '',
      contrasena: '',
    },
  });
  
  const onSubmit = async (values: loginSchemaType) => {
    console.log(values);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='pt-8'>
        <FormField
          control={form.control}
          name='correo'
          render={({ field }) => (
            <FormItem className='pb-10 relative'>
              <FormLabel>Correo</FormLabel>
              <PiEnvelopeSimpleFill className='absolute top-[36px] text-gray ml-2 text-lg' />
              <FormControl>
                <Input
                  placeholder='e.g john@gmail.com'
                  className='mt-1 pl-7 focus-visible:ring-0'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='contrasena'
          render={({ field }) => (
            <FormItem className='pb-10 relative'>
              <IoIosLock className='absolute top-[42px] text-gray ml-2 text-lg' />
              <IoIosEyeOff
                onClick={() => setShowPassword(!showPassword)}
                className={`${
                  !showPassword ? 'block' : 'hidden'
                } absolute text-gray right-0 top-[36.6px] mr-2 hover:cursor-pointer`}
              />
              <IoIosEye
                onClick={() => setShowPassword(!showPassword)}
                className={`${
                  showPassword ? 'block' : 'hidden'
                } absolute text-gray right-0 top-[36.6px] mr-2 hover:cursor-pointer`}
              />
              <FormLabel>Contraseña</FormLabel>
              <FormControl>
                <Input
                  placeholder='minimo 8 caracteres'
                  type={showPassword ? 'text' : 'password'}
                  className='mt-1 pl-7 focus-visible:ring-0'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className='w-full pt-3'>
          <Button variant={'primary'} className='w-full hover:bg-purpleHover'>
            Inciar sesión
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default LoginForm;
