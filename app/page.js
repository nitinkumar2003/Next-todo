import Image from "next/image";
require('dotenv').config();
export default function Home() {
  console.log(process.env.DATABASE_URL,"DATABASE_URL");
  return (

    <>
    <h1>Home</h1>
    </>
  );
}
