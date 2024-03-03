import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";

export default function SeeUser() {
  return (
    <>
      <Dialog>
        <DialogTrigger>
        Ver perfil completo
        </DialogTrigger>
        <DialogContent className="flex h-4/5 w-3/4 flex-col overflow-scroll">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl">
              Cadastro de Livro
            </DialogTitle>
            <DialogDescription>Preencha todos os campos.</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}
