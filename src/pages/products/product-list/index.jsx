import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { HeaderWithBreadcrumb } from "@/components/common/header-breadcrumb";
import { TableWarpper } from "@/components/common/table-wrapper";
import { ProductFilters } from "@/components/filters/product-filters";
import { useRef, useState } from "react";
import { ModalWrapper } from "@/components/common/modal-wrapper";
import { ProductFilterModal } from "@/components/modals/product-filter-modal";
import { ProductTable } from "@/components/tables/product-table";
import { PaginationWrapper } from "@/components/common/pagination-wrapper";

const products = [
  {
    id: "PRD-001",
    name: "Premium Wireless Headphones",
    thumbnail: "/placeholder.svg?height=50&width=50",
    category: "Electronics",
    price: 149.99,
    stock: 45,
    quantity: 200,
    sales: 155,
    status: "active",
  },
  {
    id: "PRD-002",
    name: "Ergonomic Office Chair",
    thumbnail: "/placeholder.svg?height=50&width=50",
    category: "Furniture",
    price: 249.99,
    stock: 12,
    quantity: 80,
    sales: 68,
    status: "active",
  },
  {
    id: "PRD-003",
    name: "Smart Home Security Camera",
    thumbnail: "/placeholder.svg?height=50&width=50",
    category: "Electronics",
    price: 89.99,
    stock: 28,
    quantity: 150,
    sales: 122,
    status: "active",
  },
  {
    id: "PRD-004",
    name: "Organic Cotton T-Shirt",
    thumbnail: "/placeholder.svg?height=50&width=50",
    category: "Apparel",
    price: 24.99,
    stock: 120,
    quantity: 500,
    sales: 380,
    status: "active",
  },
  {
    id: "PRD-005",
    name: "Stainless Steel Water Bottle",
    thumbnail: "/placeholder.svg?height=50&width=50",
    category: "Kitchen",
    price: 19.99,
    stock: 75,
    quantity: 300,
    sales: 275,
    status: "active",
  },
  {
    id: "PRD-006",
    name: "Bluetooth Portable Speaker",
    thumbnail: "/placeholder.svg?height=50&width=50",
    category: "Electronics",
    price: 79.99,
    stock: 5,
    quantity: 100,
    sales: 95,
    status: "active",
  },
  {
    id: "PRD-007",
    name: "Yoga Mat Premium",
    thumbnail: "/placeholder.svg?height=50&width=50",
    category: "Fitness",
    price: 34.99,
    stock: 0,
    quantity: 120,
    sales: 120,
    status: "inactive",
  },
];

export const ProductListPage = () => {
  const modalRef = useRef();
  const [modalConfig, setModalConfig] = useState({
    type: "",
    title: "",
    size: "",
    data: null,
  });
  const handleShowModal = (type, title, size, data = null) => {
    setModalConfig({ type, title, size, data });
    modalRef?.current?.open();
  };
  const handleHideModal = () => {
    setModalConfig({ type: "", title: "", size: "", data: null });
    modalRef?.current?.close();
  };

  return (
    <>
      <section className="p-6 bg-gray-100">
        <Card>
          <CardHeader>
            <HeaderWithBreadcrumb
              title={`Product Management`}
              breadcrumbs={[{ title: "Product List" }]}>
              <Button href="/products/create" className="btn-primary btn-lg">
                <Plus className="mr-1 h-4 w-4" />
                Add Product
              </Button>
            </HeaderWithBreadcrumb>
          </CardHeader>

          <CardContent>
            <ProductFilters
              onOpenModal={() =>
                handleShowModal("FILTER", "Product filter", "max-w-xl")
              }
            />

            <TableWarpper>
              <ProductTable products={products} />
              <div className="p-6 flex justify-end">
                <PaginationWrapper
                  paginationData={{}}
                  onPageChange={() => {}}
                />
              </div>
            </TableWarpper>
          </CardContent>
        </Card>
      </section>

      <ModalWrapper
        ref={modalRef}
        title={modalConfig.title}
        width={modalConfig.size}
        onHide={handleHideModal}>
        {modalConfig.type === "FILTER" && <ProductFilterModal />}
      </ModalWrapper>
    </>
  );
};
