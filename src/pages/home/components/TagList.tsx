interface TagListProps {
  items: string[];
}

export const TagList = ({ items }: TagListProps) => (
  <ul className="flex flex-wrap gap-2.5">
    {items.map((item) => (
      <li
        key={item}
        className="rounded-full border border-ink/15 px-4 py-2 text-sm font-medium text-ink transition-colors duration-300 hover:border-wine hover:bg-wine hover:text-ivory"
      >
        {item}
      </li>
    ))}
  </ul>
);
