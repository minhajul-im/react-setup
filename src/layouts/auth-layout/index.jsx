export const AuthLayout = ({ children }) => {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
      <section className="w-full max-w-sm md:max-w-3xl">
        <div className="flex flex-col gap-6">
          {children}

          <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
            By clicking continue, you agree to our{" "}
            <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
          </div>
        </div>
      </section>
    </main>
  );
};
