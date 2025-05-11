import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Edit, Eye, Trash2 } from "lucide-react";
import { Checkbox } from "../ui/checkbox";
import { truncateText } from "@/helper";
import { CopyButton } from "../common/copy-button";

export const TicketTable = ({ tickets }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>
            <Checkbox />
          </TableHead>
          <TableHead>ID</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Client</TableHead>
          <TableHead>Assign to</TableHead>
          <TableHead>Created Date</TableHead>
          <TableHead>Due Date</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Priority</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tickets?.length === 0 ? (
          <TableRow>
            <TableCell
              colSpan={9}
              className="text-center py-8 text-muted-foreground">
              No tickets found. Try adjusting your search.
            </TableCell>
          </TableRow>
        ) : (
          tickets.map((ticket) => (
            <TableRow key={ticket.id}>
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-1">
                  <span>{ticket?.id} </span>
                  <CopyButton id={ticket?.id} />
                </div>
              </TableCell>
              <TableCell>{truncateText(ticket?.title)}</TableCell>
              <TableCell>{ticket?.client}</TableCell>
              <TableCell>{ticket?.assignedTo}</TableCell>
              <TableCell>{ticket?.createdDate}</TableCell>
              <TableCell>{ticket?.dueDate}</TableCell>
              <TableCell>
                <span
                  className={`badge ${
                    ticket.status === "In Progress"
                      ? "badge-info"
                      : ticket.status === "Open"
                      ? "badge-success"
                      : ticket.status === "Pending"
                      ? "badge-warning"
                      : "badge-primary"
                  }`}>
                  {ticket?.status}
                </span>
              </TableCell>
              <TableCell>
                <span
                  className={`badge ${
                    ticket.priority === "High" || ticket.priority === "Critical"
                      ? "badge-danger"
                      : ticket.priority === "Medium"
                      ? "badge-warning"
                      : "badge-info "
                  }`}>
                  {ticket?.priority}
                </span>
              </TableCell>
              <TableCell>
                <div className="flex justify-end items-center gap-1">
                  <Button
                    iconBtn
                    icon={Eye}
                    tooltipText="View"
                    className="icon-btn primary-soft"
                  />
                  <Button
                    iconBtn
                    icon={Edit}
                    tooltipText="Edit"
                    className="icon-btn btn-info-soft"
                  />
                  <Button
                    iconBtn
                    icon={Trash2}
                    tooltipText="Delete"
                    className="icon-btn btn-danger-soft"
                  />
                </div>
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  );
};
