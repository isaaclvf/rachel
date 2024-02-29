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

export default function HeaderBar() {
  return (
    <header className="flex h-16 items-center justify-between border-b-[1px] px-4">
      <div>Logo</div>
      <Sheet>
        <SheetTrigger>
          <HamburgerMenuIcon className="h-6 w-6"></HamburgerMenuIcon>
        </SheetTrigger>
        <SheetContent className="flex flex-col justify-between">
          <div className="flex flex-col gap-4">
            <SheetHeader>
              <SheetTitle>Navegação</SheetTitle>
              <SheetDescription>
                Explore diferentes áreas da platafoma.
              </SheetDescription>
            </SheetHeader>

            <Link href="/home">Lista de desejos</Link>
            <Link href="/home">Reservas</Link>
            <Link href="/home">Novidades</Link>
            <Link href="/home">Sobre</Link>
            
          </div>
          <SheetFooter>
            <Button>Sair</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </header>
  );
}
