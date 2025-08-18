import { useQueryString } from "@/hooks/use-query-string";

type Props = {
  groupId: string;
  item: {
    id: string;
    label: string;
  };
};

export function FilterItem({ groupId, item }: Props) {
  const queryString = useQueryString();

  function toggleFilter(groupId: string, itemId: string) {
    const queryGroup = queryString.get(groupId);
    let currentFilters = queryGroup ? queryGroup.split("|") : [];

    if (currentFilters.includes(itemId)) {
      currentFilters = currentFilters.filter((item) => item !== itemId);
    } else {
      currentFilters.push(itemId);
    }

    queryString.set(groupId, currentFilters.join("|"));
  }

  function hasFilter(groupId: string, itemId: string) {
    let currentFilters = queryString.get(groupId)?.split("|");
    return currentFilters && currentFilters.includes(itemId) ? true : false;
  }

  return (
    <div className="flex gap-4 items-center mt-4">
      <input
        type="checkbox"
        className="size-6 cursor-pointer"
        id={`ck-${item.id}`}
        onChange={() => toggleFilter(groupId, item.id)}
        checked={hasFilter(groupId, item.id)}
      />
      <label
        className="text-lg text-gray-500 cursor-pointer"
        htmlFor={`ck-${item.id}`}
      >
        {item.label}
      </label>
    </div>
  );
}
