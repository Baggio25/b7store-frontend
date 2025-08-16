"use client";

import { ChangeEvent, useState } from "react";
import { useQueryString } from "@/hooks/use-query-string";

export function ProductListFilter() {
  const queryString = useQueryString();
  const [filterOpened, setFilterOpened] = useState(false);

  const order = queryString.get("order") ?? "views";

  function handleSelectChanged(e: ChangeEvent<HTMLSelectElement>) {
    queryString.set("order", e.target.value);
  }

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
        <div className="text-3xl">
          <strong>99</strong> Produtos
        </div>

        <div className="flex flex-row w-full md:max-w-70 gap-5">
          <select
            onChange={handleSelectChanged}
            defaultValue={order}
            className="flex-1 flex items-center px-6 h-14 bg-white border
             border-gray-200 rounded-sm text-gray-500"
          >
            <option value="views">Popularidade</option>
            <option value="price">Preço</option>
            <option value="selling">Mais vendidos</option>
          </select>

          <div
            onClick={() => setFilterOpened(!filterOpened)}
            className="flex-1 md:hidden flex items-center px-6 h-14 bg-white border
             border-gray-200 rounded-sm text-gray-500"
          >
            Filtrar por
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 mt-8">
        <div
          className={`flex-1 md:max-w-70 ${
            filterOpened ? "block" : "hidden"
          } md:block`}
        >
          Filtro
        </div>
        <div className="flex-1 grid grid-cols-1 md:grid-cols-3">
          <div>Produto</div>
          <div>Produto</div>
          <div>Produto</div>
          <div>Produto</div>
        </div>
      </div>
    </div>
  );
}
