import HeaderBar from "@/components/header-bar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function WishlistPage() {
  return (
    <>
      <HeaderBar />
      <main className="flex min-h-screen flex-col items-center gap-4 py-24">
        <Card>
          <CardHeader className="border-b-[1px] py-4">
            <CardTitle>Lista de desejos</CardTitle>
            <CardDescription>
              Livros que você salvou para ler mais tarde
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4 py-4">
            <div>
              <p className="text-sm font-medium leading-none">Memórias Póstumas de Brás Cubas</p>
              <p className="text-sm text-muted-foreground">Machado de Assis</p>
            </div>
            <div>
              <p className="text-sm font-medium leading-none">Vidas Secas</p>
              <p className="text-sm text-muted-foreground">Graciliano Ramos</p>
            </div>
            <div>
              <p className="text-sm font-medium leading-none">São Bernardo</p>
              <p className="text-sm text-muted-foreground">Graciliano Ramos</p>
            </div>
          </CardContent>
        </Card>
      </main>
    </>
  );
}
