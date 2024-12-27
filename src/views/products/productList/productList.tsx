"use client";

import React, { useEffect, useState, useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Product } from "@/types";
import { ProductModal } from "../productModal";

interface ProductListProps {
  products: Product[];
}

const QUERY_KEY: string = "product_id";

export const ProductList = ({ products }: ProductListProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [productId, setProductId] = useState<string | null>(null);

  const createQuery = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(key, value);
      return params.toString();
    },
    [searchParams]
  );

  const deleteQuery = useCallback(
    (key: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.delete(key);
      return params.toString();
    },
    [searchParams]
  );

  useEffect(() => {
    const getProductId = searchParams.get(QUERY_KEY);

    if (getProductId) {
      setProductId(getProductId);
    } else {
      setProductId(null);
    }
  }, [searchParams]);

  const handleOpenModal = (id: string) => {
    router.push(pathname + "?" + createQuery(QUERY_KEY, id));
    setProductId(id);
  };

  const handleCloseModal = () => {
    router.push(pathname + "?" + deleteQuery(QUERY_KEY));
    setProductId(null);
  };

  return (
    <div>
      {productId && pathname && (
        <ProductModal productId={productId}>
          <button onClick={handleCloseModal}>Close</button>
        </ProductModal>
      )}

      {products.map((product) => (
        <div key={product.id} className="flex border p-2 justify-between">
          <div className="flex">
            <div>{product.id}</div>. {product.name}
          </div>
          <button onClick={() => handleOpenModal(product.id)}>Details</button>
        </div>
      ))}
    </div>
  );
};
