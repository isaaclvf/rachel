import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckIcon } from "@radix-ui/react-icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import HeaderBar from "@/components/header-bar";
import LoansTable from "@/components/loans-table";

import { catSrc } from "@/data/data";

export default function HomePage() {
  return (
    <>
      <HeaderBar />
      <main className="mx-auto my-0 flex min-h-screen max-w-[90ch] flex-col items-center justify-center gap-6 p-4">
        <div className="flex flex-col justify-center text-center align-middle">
          <Avatar className="h-36 w-36">
            <AvatarImage src={catSrc} alt="cat" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <h1>Olá, username!</h1>
        </div>
        <Alert>
          <CheckIcon className="h-4 w-4" />
          <AlertTitle>Pendências</AlertTitle>
          <AlertDescription>Você não tem nenhuma pendência.</AlertDescription>
        </Alert>
        <LoansTable />
      </main>
    </>
  );
}
