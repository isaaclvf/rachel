"use client";

import { MoreHorizontal, ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const columns = [
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const dueDate = new Date(row.getValue("dueDate") + " 23:59:59").getTime();
      return dueDate < Date.now() ? (
        <div className="rounded-md bg-yellow-700 p-1 text-center text-xs text-yellow-100">
          Atrasado
        </div>
      ) : (
        <div className="rounded-md bg-green-800 p-1 text-center text-xs text-green-300">
          Ok
        </div>
      );
    },
  },
  {
    accessorKey: "username",
    header: "Usuário",
  },
  {
    accessorKey: "bookTitle",
    header: "Livro",
  },
  {
    accessorKey: "dueDate",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Data de devolução
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return <div className="text-center">{row.getValue("dueDate")}</div>;
    },
  },
  {
    accessorKey: "partialFine",
    header: "Multa parcial",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("partialFine"));
      const formatted = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(amount);

      return formatted;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Abrir menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Opções</DropdownMenuLabel>
            <DropdownMenuItem>Devolver</DropdownMenuItem>
            <DropdownMenuItem>Renovar</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
