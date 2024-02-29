import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import { loans } from "@/data/data";

export default function LoansTable() {
  return (
    <Table className="table-auto">
      <TableCaption>Seus empréstimos.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Livro</TableHead>
          <TableHead>Data de devolução</TableHead>
          <TableHead>Renovações</TableHead>
          <TableHead className="text-right">Débito parcial (R$)</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {loans.map((loan) => (
          <TableRow key={loan.title}>
            <TableCell className="w-full font-medium">{loan.title}</TableCell>
            <TableCell>{loan.dueDate}</TableCell>
            <TableCell className="text-center">
              <Dialog>
                <DialogTrigger className="rounded-sm bg-black text-white">
                  Renovar ({loan.renewals}/10)
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Renovar empréstimo</DialogTitle>
                    <DialogDescription>
                      Renovações disponíveis: {loan.renewals}/10
                    </DialogDescription>
                  </DialogHeader>

                  <p>Renovar empréstimo do livro {loan.title}?</p>
                  <DialogFooter>
                    <Button type="submit">Confirmar</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </TableCell>
            <TableCell className="text-right">{loan.partialFine}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">R$ 0,00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
