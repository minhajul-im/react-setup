import { Routes, Route } from "react-router-dom";
import { BaseLayout } from "@/layouts/base-layout";
import { DashboardPage } from "@/pages/dashboard";
import { SigninPage } from "@/pages/auth/signin";
import { ProtectRoute } from "./protect-route";
import { NotFoundPage } from "@/pages/not-found";
import { ChatPage } from "@/pages/chat";
import { UserListPage } from "@/pages/users/user-list";
import { SignupPage } from "@/pages/auth/signup";
import { CreateUserPage } from "@/pages/users/create-user";
import { SettingsPage } from "@/pages/settings";
import { ProductListPage } from "@/pages/products/product-list";
import { CreateProductPage } from "@/pages/products/create-product";
import { TicketListPage } from "@/pages/support-ticket/ticket-list";
import { SupportTicketPage } from "@/pages/support-ticket";
import { CreateTicketPage } from "@/pages/support-ticket/create-ticket";
import { FileMangerPage } from "@/pages/file-manager";
import { WidgetsPage } from "@/pages/widgets";
import { MailInboxPage } from "@/pages/mail/inbox";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/auth/signup" element={<SignupPage />} />
      <Route path="/auth/signin" element={<SigninPage />} />

      <Route element={<ProtectRoute />}>
        <Route element={<BaseLayout />}>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/file-manager" element={<FileMangerPage />} />
          <Route path="/users/list" element={<UserListPage />} />
          <Route path="/users/create" element={<CreateUserPage />} />
          <Route path="/products/list" element={<ProductListPage />} />
          <Route path="/products/create" element={<CreateProductPage />} />
          <Route
            path="/support-ticket/overview"
            element={<SupportTicketPage />}
          />
          <Route path="/mail/inbox" element={<MailInboxPage />} />
          <Route path="/support-ticket/list" element={<TicketListPage />} />
          <Route path="/support-ticket/create" element={<CreateTicketPage />} />
          <Route path="/settings/general" element={<SettingsPage />} />
          <Route path="/pages/signin" element={<SigninPage />} />
          <Route path="/pages/signup" element={<SignupPage />} />
          <Route path="/pages/widgets" element={<WidgetsPage />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
