import Link from "next/link";
import { useState } from "react";

export default function Home() {
  // const [login, setLogin] = useState<boolean>(false);
  // const getUser = () => {
  //   return true;
  // };

  return (
    <div>
      <div>
        <Link href="/login">login</Link>
      </div>
      <div>
        <Link href="/rent">(main)</Link>
      </div>
    </div>
  );
}
