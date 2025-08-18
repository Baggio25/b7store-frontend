type Props = {
  id: number;
  label: string;
};

export function FilterItem({ id, label }: Props) {
  return (
    <div className="flex gap-4 items-center mt-4">
      <input
        type="checkbox"
        className="size-6 cursor-pointer"
        id={`ck-${id}`}
      />
      <label
        className="text-lg text-gray-500 cursor-pointer"
        htmlFor={`ck-${id}`}
      >
        {label}
      </label>
    </div>
  );
}
