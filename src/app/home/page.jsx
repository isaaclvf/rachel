import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckIcon } from "@radix-ui/react-icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import HeaderBar from "@/components/header-bar";
import LoansTable from "@/components/loans-table";
import { catSrc } from "@/data/data";
import Footer from "@/components/footer";

export default function HomePage() {
  return (
    <>
      <HeaderBar />
      <main className="mx-auto my-0 flex min-h-screen max-w-[90ch] flex-col items-center justify-center gap-6 bg-[#F5F5F5] p-4">
        <div className="flex flex-col justify-center text-center align-middle">
          <Avatar className="h-36 w-36">
            <AvatarImage src={catSrc} alt="cat" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <h1 className="font-serif text-xl">Olá, username!</h1>
        </div>
        <Alert className="bg-[#FFF9C7]">
          <CheckIcon className="h-4 w-4" />
          <AlertTitle>Pendências</AlertTitle>
          <AlertDescription>Você não tem nenhuma pendência.</AlertDescription>
        </Alert>
        <LoansTable />
      </main>
      <Footer />
    </>
  );
}
