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

export default function LoginAdminPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <img className="pb-9" src="logoNormal.svg" alt="logo" />
      <Card className="bg-[#A0DFC7]">
        <CardHeader>
          <CardTitle>Bem-vindo!</CardTitle>
          <CardDescription className="text-black">
            Insira suas credenciais para acessar a plataforma.
          </CardDescription>
        </CardHeader>
        <form>
          <CardContent className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="login">Email</Label>
            <Input
              id="login"
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
          <CardContent>
            <Link href="">Esqueci minha senha</Link>
          </CardContent>
          <CardContent className="flex w-full justify-end">
            <Link href="/admin/users">
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
      <Link href="/login" className="py-4">Sou usuário</Link>
    </main>
  );
}
