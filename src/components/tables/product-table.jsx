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

export const ProductTable = ({ products }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>
            <Checkbox />
          </TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Stock</TableHead>
          <TableHead>Quantity</TableHead>
          <TableHead>Sales</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products?.length === 0 ? (
          <TableRow>
            <TableCell
              colSpan={6}
              className="text-center py-8 text-muted-foreground">
              No Product found. Try adjusting your search.
            </TableCell>
          </TableRow>
        ) : (
          products.map((product) => (
            <TableRow key={product.id}>
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell>
                <div className="flex items-center justify-start gap-2 h-full">
                  <div className="relative w-[60px] h-[60px] rounded-lg">
                    <img
                      src={product?.thumbnail}
                      alt={truncateText(product?.name, 5)}
                      className="absolute w-full h-ful object-cover rounded-lg"
                    />
                  </div>

                  <div className="font-medium flex flex-col gap-2">
                    <span>{truncateText(product.name)}</span>
                    <span className="text-gray-300 font-normal">
                      {product?.id}
                    </span>
                  </div>
                </div>
              </TableCell>

              <TableCell>{product?.category}</TableCell>
              <TableCell>{product?.price}</TableCell>
              <TableCell>{product?.stock}</TableCell>
              <TableCell>{product?.quantity}</TableCell>
              <TableCell>{product?.sales}</TableCell>

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
