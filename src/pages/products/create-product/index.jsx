import { CardWrapper } from "@/components/common/card-wrapper";
import { Field } from "@/components/common/field";
import { HeaderWithBreadcrumb } from "@/components/common/header-breadcrumb";
import { SelectBox } from "@/components/common/selectbox";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export const CreateProductPage = () => {
  return (
    <section className="p-6 bg-gray-100">
      <Card>
        <CardHeader>
          <HeaderWithBreadcrumb
            title="Add Product"
            breadcrumbs={[
              { title: "Product List", path: "/products/list" },
              { title: "Add Product" },
            ]}
          />
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
              <div className="lg:col-span-6">
                <CardWrapper title="Product Basic Info">
                  <div className="flex flex-col gap-4">
                    <Field required label="Product Name">
                      <input
                        className="form-control input-lg"
                        type="text"
                        name="product_name"
                        placeholder="Product name"
                      />
                    </Field>
                    <Field required label="Product slug">
                      <input
                        className="form-control input-lg"
                        type="text"
                        name="product_slug"
                        placeholder="Product slug"
                      />
                    </Field>
                    <Field required label="Product Price">
                      <input
                        className="form-control input-lg"
                        type="text"
                        name="price"
                        placeholder="Price"
                      />
                    </Field>
                    <Field required label="Product Quantity">
                      <input
                        className="form-control input-lg"
                        type="text"
                        name="quantity"
                        placeholder="Quantity"
                      />
                    </Field>
                  </div>
                </CardWrapper>
              </div>
              <div className="lg:col-span-6">
                <CardWrapper title="Product Type">
                  <div className="flex flex-col gap-4">
                    <Field label="Brand Name">
                      <input
                        className="form-control input-lg"
                        type="text"
                        name="brand_name"
                        placeholder="Brand name"
                      />
                    </Field>
                    <Field label="Category name">
                      <input
                        className="form-control input-lg"
                        type="text"
                        name="category"
                        placeholder="Category Name"
                      />
                    </Field>
                    <Field label="Sub Category">
                      <input
                        className="form-control input-lg"
                        type="text"
                        name="sub-category"
                        placeholder="Sub Category"
                      />
                    </Field>
                    <Field required label="Tags" className="h-auto">
                      <SelectBox
                        options={tags}
                        placeholder="Select Tags"
                        size="lg"
                        className="h-auto"
                        isMulti
                      />
                    </Field>
                  </div>
                </CardWrapper>
              </div>
              <div className="lg:col-span-6">
                <CardWrapper title="Product Image">
                  <div className="flex flex-col gap-4">
                    <Field htmlFor="file">
                      <input
                        className="form-control input-lg"
                        id="file"
                        type="file"
                        name="image"
                        accept="image/*"
                      />
                    </Field>
                  </div>
                </CardWrapper>
              </div>
              <div className="lg:col-span-6">
                <CardWrapper title="Product Description">
                  <Field>
                    <textarea
                      className="form-textarea"
                      rows="4"
                      name="bio"
                      placeholder="Write something about the user..."
                    />
                  </Field>
                </CardWrapper>
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

const tags = [
  { value: "eco-friendly", label: "Eco Friendly" },
  { value: "bestseller", label: "Bestseller" },
  { value: "new-arrival", label: "New Arrival" },
  { value: "limited-edition", label: "Limited Edition" },
];
