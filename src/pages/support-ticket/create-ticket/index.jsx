import { Field } from "@/components/common/field";
import { HeaderWithBreadcrumb } from "@/components/common/header-breadcrumb";
import { SelectBox } from "@/components/common/selectbox";
import { TextEditor } from "@/components/common/text-editor";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const priorityList = [
  { value: "high", label: "High" },
  { value: "medium", label: "Medium" },
  { value: "low", label: "Low" },
];
const ticketStatusList = [
  { value: "open", label: "Open" },
  { value: "in_progress", label: "In Progress" },
  { value: "pending", label: "Pending" },
  { value: "replyed", label: "Replyed" },
  { value: "resolved", label: "Resolved" },
];

export const CreateTicketPage = () => {
  return (
    <section className="p-6 bg-gray-100">
      <Card>
        <CardHeader>
          <HeaderWithBreadcrumb
            title="Create Ticket"
            breadcrumbs={[
              { title: "Overview", path: "/support-ticket/overview" },
              { title: "Ticket List", path: "/support-ticket/list" },
              { title: "Create Ticket" },
            ]}
          />
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
              <div className="lg:col-span-12">
                <Field required label="Subject">
                  <input
                    className="form-control input-lg"
                    type="text"
                    name="subject"
                    placeholder="Subject"
                  />
                </Field>
              </div>

              <div className="lg:col-span-6">
                <Field required label="Priority">
                  <SelectBox
                    options={priorityList}
                    placeholder="Select Priority"
                    size="lg"
                  />
                </Field>
              </div>

              <div className="lg:col-span-6">
                <Field required label="Status">
                  <SelectBox
                    options={ticketStatusList}
                    placeholder="Select Status"
                    size="lg"
                  />
                </Field>
              </div>

              <div className="lg:col-span-12">
                <p className="form-label fw-normal mb-3">Description</p>
                <TextEditor placeholder={"Describe Your Issue..."} />
              </div>

              <div className="lg:col-span-12">
                <Field htmlFor={"file"} label="Files">
                  <input
                    className="form-control input-lg"
                    type="file"
                    name="file"
                    id="file"
                    multiple
                  />
                </Field>
              </div>

              <div className="lg:col-span-12 flex justify-end">
                <Button className="btn-lg btn-primary">Submit</Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </section>
  );
};
