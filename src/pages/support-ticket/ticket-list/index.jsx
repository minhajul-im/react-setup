import { TicketPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { HeaderWithBreadcrumb } from "@/components/common/header-breadcrumb";
import { TableWarpper } from "@/components/common/table-wrapper";
import { useRef, useState } from "react";
import { ModalWrapper } from "@/components/common/modal-wrapper";
import { ProductFilterModal } from "@/components/modals/product-filter-modal";
import { PaginationWrapper } from "@/components/common/pagination-wrapper";
import { TicketTable } from "@/components/tables/ticket-table";
import { TicketFilters } from "@/components/filters/ticket-filters";
import { TicketFilterModal } from "@/components/modals/ticket-filter-modal";

const tickets = [
  {
    id: "TCK001",
    title: "Login Issue",
    client: "Acme Corp",
    assignedTo: "John Doe",
    createdDate: "Apr 01, 2025 09:30 AM",
    dueDate: "Apr 05, 2025 05:00 PM",
    status: "Open",
    priority: "High",
    thumbnail: "https://example.com/images/login-issue.jpg",
  },
  {
    id: "TCK002",
    title: "Payment Gateway Error",
    client: "Beta Inc",
    assignedTo: "Jane Smith",
    createdDate: "Apr 02, 2025 11:15 AM",
    dueDate: "Apr 06, 2025 03:00 PM",
    status: "In Progress",
    priority: "Medium",
    thumbnail: "https://example.com/images/payment-error.jpg",
  },
  {
    id: "TCK003",
    title: "UI Bug",
    client: "Gamma Ltd",
    assignedTo: "Alice Brown",
    createdDate: "Apr 03, 2025 02:45 PM",
    dueDate: "Apr 07, 2025 12:00 PM",
    status: "Open",
    priority: "Low",
    thumbnail: "https://example.com/images/ui-bug.jpg",
  },
  {
    id: "TCK004",
    title: "Database Connection Failure",
    client: "Delta Solutions",
    assignedTo: "Bob Wilson",
    createdDate: "Apr 03, 2025 10:00 AM",
    dueDate: "Apr 08, 2025 06:00 PM",
    status: "In Progress",
    priority: "High",
    thumbnail: "https://example.com/images/db-error.jpg",
  },
  {
    id: "TCK005",
    title: "Feature Request",
    client: "Epsilon Co",
    assignedTo: "Carol Davis",
    createdDate: "Apr 04, 2025 08:20 AM",
    dueDate: "Apr 10, 2025 04:30 PM",
    status: "Pending",
    priority: "Medium",
    thumbnail: "https://example.com/images/feature-request.jpg",
  },
  {
    id: "TCK006",
    title: "Security Vulnerability",
    client: "Zeta Enterprises",
    assignedTo: "David Lee",
    createdDate: "Apr 04, 2025 01:50 PM",
    dueDate: "Apr 05, 2025 11:00 PM",
    status: "Open",
    priority: "Critical",
    thumbnail: "https://example.com/images/security-issue.jpg",
  },
  {
    id: "TCK007",
    title: "Performance Lag",
    client: "Eta Industries",
    assignedTo: "Emma Clark",
    createdDate: "Apr 05, 2025 07:40 AM",
    dueDate: "Apr 09, 2025 02:00 PM",
    status: "In Progress",
    priority: "High",
    thumbnail: "https://example.com/images/performance-lag.jpg",
  },
  {
    id: "TCK008",
    title: "Mobile App Crash",
    client: "Theta LLC",
    assignedTo: "Frank Harris",
    createdDate: "Apr 05, 2025 04:25 PM",
    dueDate: "Apr 07, 2025 09:00 AM",
    status: "Open",
    priority: "High",
    thumbnail: "https://example.com/images/app-crash.jpg",
  },
  {
    id: "TCK009",
    title: "Email Notification Failure",
    client: "Iota Group",
    assignedTo: "Grace Martin",
    createdDate: "Apr 06, 2025 12:10 PM",
    dueDate: "Apr 08, 2025 01:30 PM",
    status: "Pending",
    priority: "Medium",
    thumbnail: "https://example.com/images/email-failure.jpg",
  },
  {
    id: "TCK010",
    title: "API Integration Issue",
    client: "Kappa Ventures",
    assignedTo: "Henry Taylor",
    createdDate: "Apr 06, 2025 03:55 PM",
    dueDate: "Apr 11, 2025 10:00 AM",
    status: "In Progress",
    priority: "High",
    thumbnail: "https://example.com/images/api-issue.jpg",
  },
];

export const TicketListPage = () => {
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
              title={`Support Taicket`}
              breadcrumbs={[
                { title: "Overview", path: "/support-ticket/overview" },
                { title: "Ticket List" },
              ]}>
              <Button
                href="/support-ticket/create"
                className="btn-primary btn-lg">
                <TicketPlus className="mr-1 h-4 w-4" />
                Create Ticket
              </Button>
            </HeaderWithBreadcrumb>
          </CardHeader>

          <CardContent>
            <TicketFilters
              onOpenModal={() =>
                handleShowModal("FILTER", "Ticket filter", "max-w-xl")
              }
            />

            <TableWarpper>
              <TicketTable tickets={tickets} />
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
        {modalConfig.type === "FILTER" && <TicketFilterModal />}
      </ModalWrapper>
    </>
  );
};
