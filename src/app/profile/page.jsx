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
import Footer from "@/components/footer";
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
  DialogFooter,
} from "@/components/ui/dialog";

export default function ProfilePage() {
  return (
    <>
      <HeaderBar />
      <main className="bg-[#F5F5F5]">
        <div className="flex w-full translate-y-8 justify-center">
          <Avatar className="h-36 w-36  border-4 border-white ">
            <AvatarImage className="" src={catSrc} />
          </Avatar>
        </div>

        <div className="h-screen  grid-flow-col-dense  justify-center rounded-t-[50px] bg-[url('/public/rachelF.png')]">
          <div className="mb-0 flex flex-row justify-center gap-2">
            <h1 className="py-12 text-black"> Username </h1>

            <Dialog className="">
              <DialogTrigger asChild>
                <Pencil1Icon className="my-12 h-6 w-6 text-black"></Pencil1Icon>
              </DialogTrigger>
              <DialogContent className="flex h-4/5 w-3/4 flex-col overflow-scroll">
            <DialogHeader>
              <DialogTitle className="font-serif text-2xl">
                Cadastro de usuário
              </DialogTitle>
              <DialogDescription>Preencha todos os campos.</DialogDescription>
            </DialogHeader>
            <form method="post">
              <fieldset>
                <legend legend className="font-serif text-lg font-bold">
                  Dados Pessoais
                </legend>
                <ul>
                  <li>
                    <label for="name">Nome:</label>
                    <input
                      type="text"
                      value="username"
                      id="name"
                      name="name"
                      className="h-8 w-full rounded-md border border-input p-1"
                    />
                  </li>
                  <li className="mt-2">
                    <label for="avatar">Imagem de perfil:</label>
                    <input
                      type="file"
                      id="avatar"
                      name="avatar"
                      className="h-8 w-full rounded-md border border-input p-1 text-sm"
                    />
                  </li>
                  <span className="mt-2 flex gap-2">
                    <li className="flex w-full flex-col">
                      <label for="birthdate">Nascimento:</label>
                      <input
                        type="date"
                        value="03/05/2003"
                        id="birthdate"
                        name="birthdate"
                        className="h-8 rounded-md border border-input p-1"
                      />
                    </li>
                    <li className="flex w-full flex-col">
                      <label for="gender">Gênero:</label>
                      <select
                        name="gender"
                        value="Outro"
                        id="gender"
                        className="h-8 rounded-md border border-input p-1"
                      >
                        <option value="male">Masculino</option>
                        <option value="female">Feminino</option>
                        <option value="other">Outro</option>
                      </select>
                    </li>
                  </span>
                  <li className="mt-2">
                    <label for="cpf">CPF:</label>
                    <input
                      type="number"
                      value="12345678910"
                      id="cpf"
                      name="cpf"
                      className="h-8 w-full rounded-md border border-input p-1"
                    />
                  </li>
                </ul>
              </fieldset>
              <fieldset className="mt-4">
                <legend legend className="font-serif text-lg font-bold">
                  Endereço
                </legend>
                <ul>
                  <li>
                    <label for="adress-street">Logradouro:</label>
                    <input
                      type="text"
                      value="Rua Logadouro"
                      id="adress-street"
                      name="adress-street"
                      className="h-8 w-full rounded-md border border-input p-1"
                    />
                  </li>
                  <li className="flex w-full flex-col mt-2">
                    <label for="adress-number">Número:</label>
                    <input
                      type="number"
                      value="19"
                      id="adress-number"
                      name="adress-number"
                      className="h-8 rounded-md border border-input p-1"
                    />
                  </li>
                  <li className="flex w-full flex-col mt-2">
                    <label for="adress-district">Bairro:</label>
                    <input
                      type="text"
                      value="Bairro"
                      id="adress-district"
                      name="adress-district"
                      className="h-8 rounded-md border border-input p-1"
                    />
                  </li>
                  <li className="mt-2">
                    <label for="adress-complement">Complemento:</label>
                    <input
                      type="text"
                      value="Complemento"
                      id="adress-complement"
                      name="adress-complement"
                      className="h-8 w-full rounded-md border border-input p-1"
                    />
                  </li>
                  <li className="mt-2">
                    <label for="adress-city">Cidade:</label>
                    <input
                      type="text"
                      value="Cidade"
                      id="adress-city"
                      name="adress-city"
                      className="h-8 w-full rounded-md border border-input p-1"
                    />
                  </li>
                </ul>
              </fieldset>
              <fieldset className="mt-4">
                <legend legend className="font-serif text-lg font-bold">
                  Contato
                </legend>
                <ul>
                  <li>
                    <label for="email">E-mail:</label>
                    <input
                      type="email"
                      value="email@email.com"
                      id="email"
                      name="email"
                      className="h-8 w-full rounded-md border border-input p-1"
                    />
                  </li>
                  <li className="flex w-full flex-col">
                    <label for="phone">Telefone:</label>
                    <input
                      type="tel"
                      value="88912345678"
                      id="phone"
                      name="phone"
                      className="h-8 w-full rounded-md border border-input p-1"
                    />
                  </li>
                </ul>
              </fieldset>
              <Button className="mt-6 bg-[#113535] w-full">Salvar cadastro</Button>
            </form>
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
                    <WishlistComponet />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  );
}
