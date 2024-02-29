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
    <header className="flex h-16 items-center justify-between border-b-[1px] px-4">
      <Link href="/home">Logo</Link>
      <div className="flex flex-row gap-4">
        <Sheet>
          <SheetTrigger>
            <HamburgerMenuIcon className="h-6 w-6"></HamburgerMenuIcon>
          </SheetTrigger>
          <SheetContent className="flex flex-col justify-between">
            <div className="flex flex-col gap-4">
              <SheetHeader>
                <SheetTitle>Admin</SheetTitle>
                <SheetDescription>
                  Gerencie os dados da biblioteca
                </SheetDescription>
              </SheetHeader>

              <Link href="/admin/books">Livros</Link>
              <Link href="/admin/loans">Empréstimos</Link>
              <Link href="/admin/users">Usuários</Link>
            </div>
            <SheetFooter>
              <Button>Sair</Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
