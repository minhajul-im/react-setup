import React from "react";

export const TableWarpper = ({ children }) => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-4">
      <article className="col-span-12 rounded-lg border">{children}</article>
    </section>
  );
};
