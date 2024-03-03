import HeaderBar from "@/components/header-bar";
import {
  Accordion,
  AccordionContent,
  AccordionTrigger,
  AccordionItem,
} from "@/components/ui/accordion";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { catSrc } from "@/data/data";
import { Pencil1Icon } from "@radix-ui/react-icons";
import Link from "next/link";
import Reservation from "../reservations/reservations";
import WishlistComponet from "../wishlist/wishlist";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter
} from "@/components/ui/dialog";

export default function ProfilePage() {
  return (
    <>
      <HeaderBar />
      <main className="bg-[#F5F5F5]">
        <div className="flex w-screen translate-y-8 justify-center">
          <Avatar className="h-36 w-36  border-4 border-white ">
            <AvatarImage className="" src={catSrc} />
          </Avatar>
        </div>

        <div className="h-screen  grid-flow-col-dense justify-center rounded-t-[50px] bg-[#113535]">
          <div className="mb-0 flex flex-row justify-center gap-2">
            <h1 className="py-12 text-white"> Username </h1>

            <Dialog className="">
              <DialogTrigger asChild>
                <Pencil1Icon className="my-12 h-6 w-6 text-white"></Pencil1Icon>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] bg-[#F5F5F5]">
                <DialogHeader>
                  <DialogTitle>Edite o Perfil</DialogTitle>
                  <DialogDescription>
                    Clique em salvar quando terminar.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label className="text-right">
                      Rua
                    </Label>
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
                    <Label className="text-right">
                      Bairro
                    </Label>
                    <Input
                      id="bairro"
                      type="text"
                      value="Bairro"
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label className="text-right">
                      Cidade
                    </Label>
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
                  <Button type="submit" className="bg-[#113535]">Salvar</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          <div className=" px-5 ">
          <Card className="bg-[#F5F5F5]"> 
          <CardHeader className="border-b-[1px] py-4">
            <CardTitle className="font-serif">Informações</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-row flex-wrap justify-between gap-4 py-4">
            <div>
              <p className="text-sm font-medium leading-none">Rua</p>
              <p className="text-sm text-muted-foreground">Rua</p>
            </div>
            <div>
              <p className="text-sm font-medium leading-none">Número</p>
              <p className="text-sm text-muted-foreground">Número</p>
            </div>
            <div>
              <p className="text-sm font-medium leading-none">Bairro</p>
              <p className="text-sm text-muted-foreground">Bairro</p>
            </div>
            <div>
              <p className="text-sm font-medium leading-none">Cidade</p>
              <p className="text-sm text-muted-foreground">Cidade</p>
            </div>
            <div>
              <p className="text-sm font-medium leading-none">Telefone</p>
              <p className="text-sm text-muted-foreground">Telefone</p>
            </div>
            <div>
              <p className="text-sm font-medium leading-none">UF</p>
              <p className="text-sm text-muted-foreground">UF</p>
            </div>
            <div>
              <p className="text-sm font-medium leading-none">Nascimento</p>
              <p className="text-sm text-muted-foreground">Nascimento</p>
            </div>
            
          </CardContent>
        </Card>
          </div>

          <div className=" px-5 ">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-2">
                <AccordionTrigger className="border-b-white text-white">
                  Reservas
                </AccordionTrigger>
                <AccordionContent className="text-white">
                  <Reservation />
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="border-b-white text-white">
                  Listas de desejos
                </AccordionTrigger>
                <AccordionContent className="text-white">
                  <Link href="/wishlist">
                    <WishlistComponet />
                  </Link>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </main>
    </>
  );
}
