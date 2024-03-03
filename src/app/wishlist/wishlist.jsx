"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { CrossCircledIcon } from "@radix-ui/react-icons";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function WishlistComponet() {
  const [wishlist, setWishlist] = useState([
    { title: "Memórias Póstumas de Brás Cubas", author: "Machado de Assis" },
    { title: "Vidas Secas", author: "Graciliano Ramos" },
    { title: "Vidas Secas", author: "Graciliano Ramos" },
  ]);

  const removeFromWishlist = (book) => {
    setWishlist(wishlist.filter((item) => item !== book));
  };

  return (
    <>
      <Card className="bg-[#F5F5F5]">
        <Link href="/wishlist">
          <CardHeader className="border-b-[1px] py-4">
            <CardTitle className="font-serif">Lista de desejos</CardTitle>
            <CardDescription className="text-black">
              Livros salvos para ler mais tarde
            </CardDescription>
          </CardHeader>
        </Link>

        <CardContent className="flex flex-col gap-4 py-4">
          {wishlist.map((book, index) => (
            <div className="flex flex-row justify-between" key={index}>
              <div>
                <p className="text-sm font-medium leading-none">{book.title}</p>
                <p className="text-sm text-muted-foreground">{book.author}</p>
              </div>
              <Button
                className=" border-0  bg-inherit shadow-none   hover:bg-inherit "
                onClick={() => removeFromWishlist(book)}
              >
                <CrossCircledIcon className="h-6 w-6 text-[#113535] hover:text-[#A0DFC7]"></CrossCircledIcon>
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>
    </>
  );
}
