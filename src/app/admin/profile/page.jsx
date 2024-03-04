import {
  Accordion,
  AccordionContent,
  AccordionTrigger,
  AccordionItem,
} from "@/components/ui/accordion";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { catSrc } from "@/data/data";
import { Pencil1Icon } from "@radix-ui/react-icons";
import Reservation from "@/components/reservation";
import Wishlist from "@/components/wishlist";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Footer from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import AdminHeaderBar from "@/components/admin-header-bar";

export default function ProfilePage() {
  return (
    <>
      <AdminHeaderBar />
      <main className="bg-[#F5F5F5]">
        <div className="flex w-full translate-y-8 justify-center">
          <Avatar className="h-36 w-36  border-4 border-white ">
            <AvatarImage className="" src={catSrc} />
          </Avatar>
        </div>

        <div className="h-screen  grid-flow-col-dense  justify-center rounded-t-[50px] bg-[#FFF9C7]">
          <div className="mb-0 flex flex-row justify-center gap-2">
            <h1 className="py-12 text-black"> Username </h1>

            <Dialog className="">
              <DialogTrigger asChild>
                <Pencil1Icon className="my-12 h-6 w-6 text-black"></Pencil1Icon>
              </DialogTrigger>
              <DialogContent className="bg-[#F5F5F5] sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Edite o Perfil</DialogTitle>
                  <DialogDescription>
                    Clique em salvar quando terminar.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label className="text-right">Rua</Label>
                    <Input
                      id="rua"
                      type="text"
                      value="Rua"
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="number" className="text-right">
                      Numero
                    </Label>
                    <Input
                      id="numero"
                      type="number"
                      value="Numero"
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label className="text-right">Bairro</Label>
                    <Input
                      id="bairro"
                      type="text"
                      value="Bairro"
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label className="text-right">Cidade</Label>
                    <Input
                      id="Cidade"
                      type="text"
                      value="Cidade"
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="number" className="text-right">
                      CEP
                    </Label>
                    <Input
                      id="CEP"
                      type="number"
                      value="CEP"
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="number" className="text-right">
                      Telefone
                    </Label>
                    <Input
                      id="Telefone"
                      type="tel"
                      value="Telefone"
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="number" className="text-right">
                      UF
                    </Label>
                    <Input
                      id="UF"
                      type="text"
                      value="UF"
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="number" className="text-right">
                      Nascimento
                    </Label>
                    <Input
                      id="nascimento"
                      type="date"
                      value="Nascimento"
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username" className="text-right">
                      E-mail
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value="email"
                      className="col-span-3"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit" className="bg-[#113535]">
                    Salvar
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          <div className="  mx-auto my-0 max-w-[80ch] px-4">
            <div>
              <Card className="bg-[#F5F5F5]">
                <CardHeader className="border-b-[1px] py-4">
                  <CardTitle className="font-serif">Informações</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-row flex-wrap justify-between gap-4 py-4">
                  <div>
                    <p className="text-sm font-medium leading-none">Rua</p>
                    <p className="text-sm ">Rua</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium leading-none">Número</p>
                    <p className="text-sm">Número</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium leading-none">Bairro</p>
                    <p className="text-sm">Bairro</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium leading-none">Cidade</p>
                    <p className="text-sm">Cidade</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium leading-none">Telefone</p>
                    <p className="text-sm">Telefone</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium leading-none">UF</p>
                    <p className="text-sm">UF</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium leading-none">
                      Nascimento
                    </p>
                    <p className="text-sm">Nascimento</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-2">
                  <AccordionTrigger className="border-b-black text-black">
                    Reservas
                  </AccordionTrigger>
                  <AccordionContent className="text-black">
                    <Reservation />
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="border-b-black text-black">
                    Listas de desejos
                  </AccordionTrigger>
                  <AccordionContent className="text-black">
                    <Wishlist />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
