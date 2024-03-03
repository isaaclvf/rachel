import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";

export default function WishlistComponet() {
    return(
        <>
        <Card className="bg-[#F5F5F5]"> 
          <CardHeader className="border-b-[1px] py-4">
            <CardTitle className="font-serif">Lista de desejos</CardTitle>
            <CardDescription className="text-black">
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
        </>
    );
}