import { SigninForm } from "@/components/auth/signin-form";
import { Card, CardContent } from "@/components/ui/card";
import { AuthLayout } from "@/layouts/auth-layout";

export const SigninPage = () => {
  return (
    <AuthLayout>
      <Card className="overflow-hidden">
        <CardContent className="grid p-0 md:grid-cols-2">
          <div className="relative hidden bg-muted md:block">
            <img
              src="https://ps.w.org/login-customizer/assets/icon-256x256.png?rev=2455454"
              alt="Image"
              className="absolute inset-0 p-6 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </div>

          <SigninForm />
        </CardContent>
      </Card>
    </AuthLayout>
  );
};
