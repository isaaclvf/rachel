import { useState } from 'react';
import { Button } from "@/components/ui/button";
import HeaderBar from "@/components/header-bar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";



export default function WishlistPage() {

  const [wishlist, setWishlist] = useState([
    {title: "Memórias Póstumas de Brás Cubas", author: "Machado de Assis"},
    { title: "Vidas Secas", author: "Graciliano Ramos" },
    { title: "Vidas Secas", author: "Graciliano Ramos" },
  ]);

  const removeFromWishlist = (book) => {
    setWishlist(wishlist.filter(item => item !== book));
  }

  
  return (
    <>
      <HeaderBar />
      <main className="flex min-h-screen flex-col items-center gap-4 py-24">
        <Card className="bg-[#F5F5F5]"> 
          <CardHeader className="border-b-[1px] py-4">
            <CardTitle className="font-serif">Lista de desejos</CardTitle>
            <CardDescription className="text-black">
              Livros que você salvou para ler mais tarde
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4 py-4">
          {wishlist.map((book, index) => (
    <div key={index}>
      <p className="text-sm font-medium leading-none">{book.title}</p>
      <p className="text-sm text-muted-foreground">{book.author}</p>
      <button onClick={() => removeFromWishlist(book)}>Remover da lista</button>
    </div>
        ))}
          </CardContent>
        </Card>
      </main>
    </>
  );
}
