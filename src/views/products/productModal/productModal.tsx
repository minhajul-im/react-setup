import React from "react";
import { Product } from "@/types";
import { PRODUCTS_DATA } from "@/data/productsData";

interface ProductModalProps {
  productId: string;
  children: React.ReactNode;
}

export const ProductModal = ({ productId, children }: ProductModalProps) => {
  const product = PRODUCTS_DATA.find((item: Product) => item.id === productId);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded m-4 max-w-md text-sm flex flex-col gap-2">
        <h2>{product?.name}</h2>
        <p>
          <span className="font-bold">Description:</span> {product?.description}
        </p>
        <p>
          <span className="font-bold">Price:</span> ${product?.price}
        </p>
        {children}
      </div>
    </div>
  );
};
