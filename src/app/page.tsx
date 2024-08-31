import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col justify-center items-center space-y-6 max-w-[350px]">
        <Image alt="next image" width={48} height={48} loading="lazy" src="/logo.svg" className="size-16" />

        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">Monitor WildTray</h1>
          <p className="text-sm text-muted-foreground">Monitore e Gerencie sua aplicação Wildfly com todo controle necessário!</p>
        </div>

          <Button variant="outline" asChild><Link href="/dashboard">Vamos lá <ArrowRight size={18} className="ml-2"/></Link></Button>
      </div>
      
    </div>
  );
}
