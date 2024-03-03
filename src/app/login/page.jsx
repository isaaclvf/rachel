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
import Link from "next/link";

export default function Login() {
  return (
    <main className="bg- flex min-h-screen flex-col items-center justify-between p-24">
      <img className="pb-9" src="logoNormal.svg" alt="logoNormal" />
      <Card className="bg-[#A0DFC7]">
        <CardHeader>
          <CardTitle>Bem-vindo!</CardTitle>
          <CardDescription className="text-black">
            Insira suas credenciais para acessar a plataforma.
          </CardDescription>
        </CardHeader>
        <form>
          <CardContent className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="login">Matrícula</Label>
            <Input
              id="login"
              type="text"
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
          <CardContent>
            <Link href={""}>Esqueci minha senha</Link>
          </CardContent>
          <CardContent className="flex w-full justify-end">
            <Link href="/home">
              <Button
                type="submit"
                className="bg-[#113535] hover:bg-[#174646f1]"
              >
                Entrar
              </Button>
            </Link>
          </CardContent>
        </form>
      </Card>
      <Link href="/admin/login" className="py-4">Sou administrador</Link>
    </main>
  );
}
