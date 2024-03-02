import HeaderBar from "@/components/header-bar";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { catSrc } from "@/data/data";
import { Pencil1Icon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function ProfilePage() {
  return (
    <>
      <HeaderBar />
      <main className="bg-[#F5F5F5]">
        <div className="w-screen justify-center flex translate-y-8">
        <Avatar className="h-36 w-36  border-white border-4 ">
          <AvatarImage className="" src={catSrc}/>
        </Avatar>
        </div>
        
        <div className="rounded-t-[50px] flex justify-center h-screen bg-[#113535] ">
          <div className="flex flex-row gap-2">
            <h1 className="py-12 text-white" > Username </h1>
            <Link href="/profileedit">
            <Pencil1Icon className="h-5 w-5 text-white my-12"></Pencil1Icon>
            </Link>
            
          </div>
          
          
        </div>
      </main>
    </>
  );
}
