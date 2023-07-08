'use client';
import { Form, Formik } from 'formik';
import { useRouter } from 'next/navigation';
import React from 'react';
import { Button } from '../../components/button';
import CardWrapper from '../../components/card-wrapper';
import { FormInput } from '../../components/form-input';
import { Heading } from '../../components/heading';
import { Text } from '../../components/text';

import {
  ILoginValues,
  initialValues,
  loginValidationSchema,
} from '../constants/login.constants';

const LoginCard = () => {
  const router = useRouter();
  const handleSubmit = (values: ILoginValues) => {
    if (values) {
      router.push('/Dashboard');
    }
  };
  return (
    <CardWrapper className="w-2/5 bg-white gap-10" padding="sm">
      <header>
        <div className="flex items-center mb-12">
          <div className="h-9 w-2 mr-4 bg-amber-300" />
          <Heading size="xl4">Manage Courses</Heading>
        </div>
        <div>
          <div className="flex flex-col items-center mb-2">
            <Text size="xl2" addedClasses="uppercase" weight="medium">
              Sign In
            </Text>
          </div>
          <div>
            <Text size="lg" color="lightGray" weight="light">
              Enter your credentials to access your account
            </Text>
          </div>
        </div>
      </header>
      <main className="w-full">
        <Formik<ILoginValues>
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={loginValidationSchema}
        >
          {() => {
            return (
              <Form>
                <input type="hidden" name="remember" value="true" />
                <div className="-space-y-px flex flex-col gap-6">
                  <FormInput
                    name="email"
                    label="Email"
                    placeholder="Enter your email"
                    type="email"
                    autoComplete="email"
                    required
                  />
                  <FormInput
                    name="password"
                    label="Password"
                    placeholder="Enter your password"
                    type="password"
                    autoComplete="current-password"
                    required
                  />
                  <div>
                    <Button type="submit" kind="primary" fullWidth>
                      Sign in
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-center mt-8 gap-2">
                  <Text size="xs" color="lightGray" weight="light">
                    Forgot your password?
                  </Text>
                  <Text
                    size="xs"
                    color="warning"
                    weight="light"
                    addedClasses="underline underline-offset-2"
                  >
                    Reset Password
                  </Text>
                </div>
              </Form>
            );
          }}
        </Formik>
      </main>
      <footer></footer>
    </CardWrapper>
  );
};

export default LoginCard;
