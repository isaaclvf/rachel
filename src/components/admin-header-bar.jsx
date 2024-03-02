import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

export default function AdminHeaderBar() {
  return (
    <header className="flex h-16 items-center justify-between border-b-[1px] px-4 bg-[#A0DFC7]">
      <Link href="/home">
      <img src="/logoNormal.svg" alt="" />
      </Link>
      <div className="flex flex-row gap-4">
        <Sheet>
          <SheetTrigger>
            <HamburgerMenuIcon className="h-6 w-6 text-[#113535]"></HamburgerMenuIcon>
          </SheetTrigger>
          <SheetContent className="flex flex-col justify-between bg-[#113535] text-white border-0">
            <div className="flex flex-col gap-4">
              <SheetHeader>
                <SheetTitle className=" text-white">Admin</SheetTitle>
                <SheetDescription className=" text-white">
                  Gerencie os dados da biblioteca
                </SheetDescription>
              </SheetHeader>

              <Link href="/admin/books">Livros</Link>
              <Link href="/admin/loans">Empréstimos</Link>
              <Link href="/admin/users">Usuários</Link>
            </div>
            <SheetFooter>
              <Button className="bg-[#FF2E2E] hover:bg-red-800 ">Sair</Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
