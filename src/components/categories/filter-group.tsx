import { FilterItem } from "./filter-item";

export function FilterGroup() {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center border-b border-gray-200">
        <div className="flex-1 font-bold text-xl pb-4">Nome do grupo</div>
        <div className="">...</div>
      </div>
      <div className="pt-8 flex flex-col gap-4">
        <FilterItem id={1} label={"item1"} />
        <FilterItem id={2} label={"item2"} />
        <FilterItem id={3} label={"item3"} />
      </div>
    </div>
  );
}
