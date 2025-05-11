import { SignupForm } from "@/components/auth/signup-form";
import { Card, CardContent } from "@/components/ui/card";
import { AuthLayout } from "@/layouts/auth-layout";
import React from "react";

export const SignupPage = () => {
  return (
    <AuthLayout>
      <Card className="overflow-hidden">
        <CardContent>
          <SignupForm />
        </CardContent>
      </Card>
    </AuthLayout>
  );
};
