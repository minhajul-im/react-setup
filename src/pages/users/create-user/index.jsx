import { Field } from "@/components/common/field";
import { HeaderWithBreadcrumb } from "@/components/common/header-breadcrumb";
import { SelectBox } from "@/components/common/selectbox";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { MdOutlineModeEdit } from "react-icons/md";

export const CreateUserPage = () => {
  return (
    <section className="p-6 bg-gray-100">
      <Card>
        <CardHeader>
          <HeaderWithBreadcrumb
            title="Create User"
            breadcrumbs={[
              { title: "User List", path: "/users/list" },
              { title: "Create User" },
            ]}
          />
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-8 bg-gray-100 p-6 rounded-lg">
              <h5 className="text-xl font-medium text-gray-600 mb-4">
                User Information
              </h5>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                <div className="lg:col-span-6">
                  <Field required label="First Name">
                    <input
                      className="form-control input-lg"
                      type="text"
                      name="firstName"
                      placeholder="First name"
                    />
                  </Field>
                </div>

                <div className="lg:col-span-6">
                  <Field required label="Last Name">
                    <input
                      className="form-control input-lg"
                      type="text"
                      name="lastName"
                      placeholder="Last name"
                    />
                  </Field>
                </div>

                <div className="lg:col-span-6">
                  <Field required label="Email">
                    <input
                      className="form-control input-lg"
                      type="email"
                      name="email"
                      placeholder="Email address"
                    />
                  </Field>
                </div>

                <div className="lg:col-span-6">
                  <Field required label="Phone Number">
                    <input
                      className="form-control input-lg"
                      type="tel"
                      name="phone"
                      placeholder="Phone number"
                    />
                  </Field>
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 bg-gray-100 rounded-lg p-6 flex items-center flex-col gap-4">
              <div className="relative w-[150px] h-[150px] rounded-full bg-red-100">
                <Button
                  className={cn(
                    buttonVariants({
                      variant: "outline",
                      size: "icon",
                      className: "rounded-full absolute top-20 -right-8",
                    })
                  )}>
                  <MdOutlineModeEdit className="text-xl text-muted-foreground" />
                </Button>
              </div>
              <p className="text-muted-foreground font-medium">
                {" "}
                Upload Profile Image
              </p>
            </div>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg  mt-6">
            <h5 className="text-xl font-medium text-gray-600 mb-4">
              Contact Information
            </h5>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="lg:col-span-12">
                <Field required label="Street Address">
                  <input
                    className="form-control input-lg"
                    type="text"
                    name="street"
                    placeholder="Street address"
                  />
                </Field>
              </div>
              <div className="lg:col-span-6">
                <Field required label="Country">
                  <SelectBox
                    options={[
                      { value: "US", label: "United States" },
                      { value: "IN", label: "India" },
                      { value: "BD", label: "Bangladesh" },
                      { value: "UK", label: "United Kingdom" },
                      { value: "CA", label: "Canada" },
                    ]}
                    placeholder="Select country"
                    size="lg"
                  />
                </Field>
              </div>
              <div className="lg:col-span-6">
                <Field required label="State">
                  <input
                    className="form-control input-lg"
                    type="text"
                    name="state"
                    placeholder="State"
                  />
                </Field>
              </div>

              <div className="lg:col-span-6">
                <Field required label="City">
                  <input
                    className="form-control input-lg"
                    type="text"
                    name="city"
                    placeholder="City"
                  />
                </Field>
              </div>

              <div className="lg:col-span-6">
                <Field required label="ZIP Code">
                  <input
                    className="form-control input-lg"
                    type="text"
                    name="zip"
                    placeholder="ZIP / Postal code"
                  />
                </Field>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg  mt-6">
            <h5 className="text-xl font-medium text-gray-600 mb-4">
              Permission and Access
            </h5>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="lg:col-span-6">
                <Field required label="User Role">
                  <SelectBox
                    options={[
                      { value: "admin", label: "Admin" },
                      { value: "manager", label: "Manager" },
                      { value: "editor", label: "Editor" },
                      { value: "viewer", label: "Viewer" },
                    ]}
                    placeholder="Select role"
                    size="lg"
                  />
                </Field>
              </div>
              <div className="lg:col-span-6">
                <Field required label="Actions">
                  <SelectBox
                    options={[
                      { value: "admin", label: "Admin" },
                      { value: "manager", label: "Manager" },
                      { value: "editor", label: "Editor" },
                      { value: "viewer", label: "Viewer" },
                    ]}
                    placeholder="Select action"
                    size="lg"
                  />
                </Field>
              </div>
              <div className="lg:col-span-6">
                <Field required label="Password">
                  <input
                    className="form-control input-lg"
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                </Field>
              </div>

              <div className="lg:col-span-6">
                <Field required label="Confirm Password">
                  <input
                    className="form-control input-lg"
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                  />
                </Field>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg  mt-6">
            <h5 className="text-xl font-medium text-gray-600 mb-4">About me</h5>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="lg:col-span-12">
                <Field label="About Me">
                  <textarea
                    className="form-textarea"
                    rows="4"
                    name="bio"
                    placeholder="Write something about the user..."
                  />
                </Field>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
