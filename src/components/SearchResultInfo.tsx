import Link from "next/link";

interface Props {
  total: number;
  city: string;
}

const SearchResultInfo = ({ total, city }: Props) => {
  return (
    <div className="text-xl font-bold flex flex-col gap-3 justify-between lg:flex-row lg:items-center">
      <span>
        {total} Restaurant{total > 1 ? "s" : null} found in {city}
      </span>
      <Link
        href="/"
        className="ml-2 text-sm font-bold underline cursor-pointer text-sky-500"
      >
        Change Location
      </Link>
    </div>
  );
};

export default SearchResultInfo;
