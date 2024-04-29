import React from "react";
import Link from "next/link";

const page = () => {

  return (
    <>
      <div className="flex justify-center p-2">About us</div>
          <div className="p-10 text-center">
              <Link href={"/aboutus/1"}>
                  user 1
              </Link><br />
              <Link href={"/aboutus/2"}>
                  user 2
              </Link><br />
              <Link href={"/aboutus/3"}>
                  user 3
              </Link><br />
          </div>
      
    </>
  );
};

export default page;