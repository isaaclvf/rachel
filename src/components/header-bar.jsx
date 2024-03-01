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
import { BellIcon, SearchIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function HeaderBar() {
  return (
    <header className="flex h-16 items-center justify-between border-b-[1px] px-4 bg-[#A0DFC7]">
      <Link href="/home">
        <img src="/logoNormal.svg" alt="" />
      </Link>
      <div className="flex flex-row gap-4">
        <Link href="/search">
          <SearchIcon className="text-[#113535]"></SearchIcon>
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <BellIcon className="hover:cursor-pointer text-[#113535]"></BellIcon>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <div className="p-4">
              <p>O livro que você reservou está disponível</p>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
        <Sheet>
          <SheetTrigger>
            <HamburgerMenuIcon className="h-6 w-6 text-[#113535]"></HamburgerMenuIcon>
          </SheetTrigger>
          <SheetContent className="flex flex-col justify-between bg-[#113535] text-white border-0 ">
            <div className="flex flex-col gap-4">
              <SheetHeader>
                <SheetTitle className=" text-white" >Navegação</SheetTitle>
                <SheetDescription className="text-white" >
                  Explore diferentes áreas da platafoma.
                </SheetDescription>
              </SheetHeader>

              <Link href="/wishlist">Lista de desejos</Link>
              <Link href="/reservations">Reservas</Link>
              <Link href="/profile">Seu perfil</Link>
              <Link href="/about">Sobre</Link>
            </div>
            <SheetFooter>
              <Button className="bg-[#FF2E2E] hover:bg-red-800">Sair</Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
