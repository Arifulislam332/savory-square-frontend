import Link from "next/link";
import { Button } from "./ui/button";

const Error = ({ message }: { message: string }) => {
  return (
    <div className="h-[calc(100vh-82px)] container mx-auto flex flex-col items-center justify-center gap-5">
      {message}
      <Link href="/">
        <Button>Go to Home</Button>
      </Link>
    </div>
  );
};

export default Error;
