import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { CheckCircledIcon, CrossCircledIcon } from "@radix-ui/react-icons";
  import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog";

export default function Reservation() {
  return (
    <>
      <Card className="bg-[#F5F5F5]">
        <CardHeader className="border-b-[1px] py-4">
          <CardTitle>Reservas</CardTitle>
          <CardDescription className="text-black">
            Livros que você reservou na biblioteca
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4 py-4">
          <Dialog>
            <DialogTrigger>
              <div className="flex gap-4">
                <CrossCircledIcon className="h-6 w-6 text-[#113535]"></CrossCircledIcon>
                <div>
                  <p className="text-left text-sm font-medium leading-none">
                    Memórias Póstumas de Brás Cubas
                  </p>
                  <p className="text-left text-sm text-muted-foreground">
                    Machado de Assis
                  </p>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader className="text-left">
                Livro indisponível
              </DialogHeader>
              <DialogDescription>
                Previsão de devolução para "Memórias Póstumas de Brás Cubas":
                03/03/2024.
              </DialogDescription>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger>
              <div className="flex gap-4">
                <CheckCircledIcon className="h-6 w-6 text-[#113535]"></CheckCircledIcon>
                <div>
                  <p className="text-left text-sm font-medium leading-none">
                    São Bernardo
                  </p>
                  <p className="text-left text-sm text-muted-foreground">
                    Graciliano Ramos
                  </p>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader className="text-left">
                Livro disponível
              </DialogHeader>
              <DialogDescription>
                "São Bernardo" já está disponível para empréstimo na biblioteca.
              </DialogDescription>
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>
    </>
  );
}
