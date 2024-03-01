import HeaderBar from "@/components/header-bar";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { catSrc } from "@/data/data";

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
          <h1 className="py-12 text-white" > Username </h1>
        </div>
      </main>
    </>
  );
}
