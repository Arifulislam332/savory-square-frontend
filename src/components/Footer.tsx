import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-20 bg-pink-500 py-10 text-white">
      <div className="flex flex-col md:flex-row gap-5 items-center justify-between container mx-auto">
        <Link href="/" className="text-2xl font-bold">
        Savory Square
        </Link>
        <div className="flex items-center gap-5">
          <Link href="/">Privacy</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
