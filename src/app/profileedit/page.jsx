import HeaderBar from "@/components/header-bar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";


export default function ProfileeditPage(params) {
  return (
    <>
      <HeaderBar />
      <main className="flex min-h-screen flex-col items-center justify-between p-5 bg-[#F5F5F5]" >
        <Card className="bg-[#FFF9C7]">
          <CardHeader>
            <CardTitle>Dados Pessoais</CardTitle>
            <CardDescription className="text-black">
            Confira seus dados cadastrais e altere se necessário.
            </CardDescription>
          </CardHeader>
          <form>
            <CardContent className="grid w-full max-w-sm items-center gap-1.5">
              <Label >Rua</Label>
              <Input
                type="text"
                autoComplete="off"
                className="bg-white"
              />
            </CardContent>
            <CardContent className="grid w-full max-w-sm items-center gap-1.5">
              <Label >Número</Label>
              <Input
                type="number"
                autoComplete="off"
                className="bg-white"
              />
            </CardContent>
            <CardContent className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="password">Matrícula</Label>
              <Input
                id="password"
                type="password"
                autoComplete="off"
                className="bg-white"
              />
            </CardContent>
            <CardContent className="grid w-full max-w-sm items-center gap-1.5">
              <Label >Bairro</Label>
              <Input
                type="text"
                autoComplete="off"
                className="bg-white"
              />
            </CardContent>
            <CardContent className="grid w-full max-w-sm items-center gap-1.5">
              <Label >Complemento</Label>
              <Input
                type="text"
                autoComplete="off"
                className="bg-white"
              />
            </CardContent>
            <CardContent className="grid w-full max-w-sm items-center gap-1.5">
              <Label >Cidade</Label>
              <Input
                type="text"
                autoComplete="off"
                className="bg-white"
              />
            </CardContent>
            <CardContent className="grid w-full max-w-sm items-center gap-1.5">
              <Label >CEP</Label>
              <Input
                type="number"
                autoComplete="off"
                className="bg-white"
              />
            </CardContent>
            <CardContent className="grid w-full max-w-sm items-center gap-1.5">
              <Label >Telefone</Label>
              <Input
                type="tel"
                autoComplete="off"
                className="bg-white"
              />
            </CardContent>
            <CardContent className="grid w-full max-w-sm items-center gap-1.5">
              <Label >UF</Label>
              <Input
                type="text"
                autoComplete="off"
                className="bg-white"
              />
            </CardContent>
            <CardContent className="grid w-full max-w-sm items-center gap-1.5">
              <Label >Nascimento</Label>
              <Input
                type="date"
                autoComplete="off"
                className="bg-white"
              />
            </CardContent>
            <CardContent className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="password">E-mail</Label>
              <Input
                id="e-mail"
                type="email"
                autoComplete="off"
                className="bg-white"
              />
            </CardContent>
            <CardContent className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                type="password"
                autoComplete="off"
                className="bg-white"
              />
            </CardContent>
            <CardContent className="flex w-full justify-end">
              <Button
                type="submit"
                className="bg-[#113535] hover:bg-[#174646f1]"
              >
                Salvar
              </Button>
            </CardContent>
          </form>
        </Card>
      </main>
    </>
  );
}
