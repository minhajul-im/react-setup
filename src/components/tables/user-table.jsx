import { SwitchboxWrapper } from "@/components/common/swtich-wrapper";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { format } from "date-fns";
import { Clock, Edit, Eye, Trash2 } from "lucide-react";
import { Checkbox } from "../ui/checkbox";

export const UserTable = ({ users }) => {
  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  const getRoleBadgeColor = (role) => {
    switch (role) {
      case "admin":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100";
      case "editor":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100";
      case "viewer":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>
            <Checkbox />
          </TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Phone</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Verification</TableHead>
          <TableHead>Last Login</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.length === 0 ? (
          <TableRow>
            <TableCell
              colSpan={5}
              className="text-center py-8 text-muted-foreground">
              No users found. Try adjusting your search.
            </TableCell>
          </TableRow>
        ) : (
          users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage
                      src={user.avatar || "/placeholder.svg"}
                      alt={user.name}
                    />
                    <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
                  </Avatar>
                  <div className="font-medium">{user.name}</div>
                </div>
              </TableCell>

              <TableCell>
                <div className="text-sm text-muted-foreground">
                  {user.email}
                </div>
              </TableCell>
              <TableCell>
                <div className="text-sm text-muted-foreground">
                  {user.phone}
                </div>
              </TableCell>
              <TableCell>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Badge
                        variant="outline"
                        className={getRoleBadgeColor(user.role)}>
                        {user.role}
                      </Badge>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Click to change role</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </TableCell>
              <TableCell>
                <SwitchboxWrapper />
              </TableCell>
              <TableCell>
                {user.lastLogin ? (
                  <div className="flex items-center gap-1 text-sm">
                    {format(user.lastLogin, "MM/dd/yyyy")}
                  </div>
                ) : (
                  <span className="text-muted-foreground text-sm">Never</span>
                )}
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
