import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { UserPlus } from "lucide-react";
import { HeaderWithBreadcrumb } from "@/components/common/header-breadcrumb";
import { useRef, useState } from "react";
import { ModalWrapper } from "@/components/common/modal-wrapper";
import { UserFilters } from "@/components/filters/user-filters";
import { UserTable } from "@/components/tables/user-table";
import { UserFilterModal } from "@/components/modals/user-filter-modal";
import { TableWarpper } from "@/components/common/table-wrapper";
import { PaginationWrapper } from "@/components/common/pagination-wrapper";

const users = [
  {
    id: "1",
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    avatar: "/avatars/alice.jpg",
    role: "admin",
    verified: true,
    lastLogin: "2025-04-27T09:15:00",
    phone: "+1 555-234-1234",
  },
  {
    id: "2",
    name: "Bob Smith",
    email: "bob.smith@example.com",
    avatar: "/avatars/bob.jpg",
    role: "editor",
    verified: false,
    lastLogin: "2025-04-26T14:40:00",
    phone: "+1 555-999-1010",
  },
  {
    id: "3",
    name: "Carla Gomez",
    email: "carla.gomez@example.com",
    avatar: "/avatars/carla.jpg",
    role: "viewer",
    verified: true,
    lastLogin: "2025-04-25T11:10:00",
    phone: "+34 600 555 123",
  },
  {
    id: "4",
    name: "Daniel Lee",
    email: "daniel.lee@example.com",
    avatar: "/avatars/daniel.jpg",
    role: "editor",
    verified: false,
    lastLogin: "2025-04-25T08:25:00",
    phone: "+82 10-1234-5678",
  },
  {
    id: "5",
    name: "Emma Davis",
    email: "emma.davis@example.com",
    avatar: "/avatars/emma.jpg",
    role: "admin",
    verified: true,
    lastLogin: "2025-04-24T16:45:00",
    phone: "+44 7700 900123",
  },
  {
    id: "6",
    name: "Faisal Ahmed",
    email: "faisal.ahmed@example.com",
    avatar: "/avatars/faisal.jpg",
    role: "viewer",
    verified: true,
    lastLogin: "2025-04-23T21:00:00",
    phone: "+880 1711-000111",
  },
  {
    id: "7",
    name: "Grace Chen",
    email: "grace.chen@example.com",
    avatar: "/avatars/grace.jpg",
    role: "editor",
    verified: true,
    lastLogin: "2025-04-22T09:30:00",
    phone: "+86 139 0000 8888",
  },
  {
    id: "8",
    name: "Henry Wilson",
    email: "henry.wilson@example.com",
    avatar: "/avatars/henry.jpg",
    role: "admin",
    verified: true,
    lastLogin: "2025-04-21T12:00:00",
    phone: "+1 555-234-9999",
  },
  {
    id: "9",
    name: "Isabella Rossi",
    email: "isabella.rossi@example.com",
    avatar: "/avatars/isabella.jpg",
    role: "editor",
    verified: false,
    lastLogin: "2025-04-20T15:15:00",
    phone: "+39 345 678 9012",
  },
  {
    id: "10",
    name: "James Brown",
    email: "james.brown@example.com",
    avatar: "/avatars/james.jpg",
    role: "viewer",
    verified: true,
    lastLogin: "2025-04-20T09:45:00",
    phone: "+1 555-121-2121",
  },
  {
    id: "11",
    name: "Karen Liu",
    email: "karen.liu@example.com",
    avatar: "/avatars/karen.jpg",
    role: "editor",
    verified: false,
    lastLogin: "2025-04-19T18:30:00",
    phone: "+852 9123 4567",
  },
  {
    id: "12",
    name: "Liam Miller",
    email: "liam.miller@example.com",
    avatar: "/avatars/liam.jpg",
    role: "viewer",
    verified: false,
    lastLogin: null,
    phone: "+61 412 345 678",
  },
  {
    id: "13",
    name: "Maya Patel",
    email: "maya.patel@example.com",
    avatar: "/avatars/maya.jpg",
    role: "admin",
    verified: true,
    lastLogin: "2025-04-18T10:00:00",
    phone: "+91 98765 43210",
  },
  {
    id: "14",
    name: "Nathan Kim",
    email: "nathan.kim@example.com",
    avatar: "/avatars/nathan.jpg",
    role: "editor",
    verified: false,
    lastLogin: "2025-04-17T14:10:00",
    phone: "+82 10-2222-3333",
  },
  {
    id: "15",
    name: "Olivia Thomas",
    email: "olivia.thomas@example.com",
    avatar: "/avatars/olivia.jpg",
    role: "admin",
    verified: true,
    lastLogin: "2025-04-17T08:45:00",
    phone: "+44 7900 123456",
  },
  {
    id: "16",
    name: "Paul Schneider",
    email: "paul.schneider@example.com",
    avatar: "/avatars/paul.jpg",
    role: "viewer",
    verified: true,
    lastLogin: "2025-04-16T20:20:00",
    phone: "+49 151 23456789",
  },
  {
    id: "17",
    name: "Qi Zhang",
    email: "qi.zhang@example.com",
    avatar: "/avatars/qi.jpg",
    role: "editor",
    verified: false,
    lastLogin: "2025-04-15T19:05:00",
    phone: "+86 158 0000 9999",
  },
  {
    id: "18",
    name: "Rana Chowdhury",
    email: "rana.chowdhury@example.com",
    avatar: "/avatars/rana.jpg",
    role: "admin",
    verified: true,
    lastLogin: "2025-04-14T11:55:00",
    phone: "+880 1912-345678",
  },
  {
    id: "19",
    name: "Sophie Dubois",
    email: "sophie.dubois@example.com",
    avatar: "/avatars/sophie.jpg",
    role: "viewer",
    verified: true,
    lastLogin: "2025-04-13T09:35:00",
    phone: "+33 612 345 678",
  },
  {
    id: "20",
    name: "Tomás García",
    email: "tomas.garcia@example.com",
    avatar: "/avatars/tomas.jpg",
    role: "editor",
    verified: false,
    lastLogin: "2025-04-12T17:45:00",
    phone: "+34 612 345 987",
  },
];

export const UserListPage = () => {
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
              title="User Management"
              breadcrumbs={[{ title: "User List" }]}>
              <Button href="/users/create" className="btn-primary btn-lg">
                <UserPlus className="mr-1 h-4 w-4" />
                Add User
              </Button>
            </HeaderWithBreadcrumb>
          </CardHeader>
          <CardContent>
            <UserFilters
              onOpenModal={() =>
                handleShowModal("FILTER", "User filter", "max-w-xl", null)
              }
            />
            <TableWarpper>
              <UserTable users={users} />
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
        {modalConfig.type === "FILTER" && <UserFilterModal />}
      </ModalWrapper>
    </>
  );
};
