import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Box, EllipsisVertical, PackagePlus, Plus, Settings2 } from "lucide-react";

export default function Page(){
   return (
      <div className="w-full h-min-screen p-6 space-y-6">
         <h1 className="text-2xl text-foreground">Olá <span className="font-bold">Wander</span>! 👋</h1>
         <div>
            <Tabs defaultValue="collections" className="w-full">
               <TabsList>
                  <TabsTrigger value="collections"><Box size={16} className="mr-1"/> Coleções</TabsTrigger>
                  <TabsTrigger value="settings"><Settings2 size={16} className="mr-1" />Configurações</TabsTrigger>
               </TabsList>
               <TabsContent value="collections">
                  <div className="w-full grid grid-cols-3 gap-2 py-4 justify-between">

                     <div className="border rounded-sm flex flex-col">
                        <div className="w-full flex flex-1 items-start justify-between p-4">
                           <div>
                              <h2 className="text-xl font-bold text-foreground">Coleção Padrão</h2>
                              <p className="text-muted-foreground text-sm">5 Ativo(s)</p>
                           </div>
                           <div>
                              <Button variant="outline" size="icon"><EllipsisVertical size={16} /></Button>
                           </div>
                        </div>
                        <div className="bg-muted w-full p-4 flex justify-between items-center">
                           <p className="text-muted-foreground text-sm">Não Avaliado...</p>
                           <div>
                              <Button size="sm" variant="default">Servidores e monitoramento <ArrowRight className="ml-2" size={16}/></Button>
                           </div>
                        </div>
                     </div>

                     <div className="border rounded-sm flex justify-center items-center p-6">
                        <div className="flex flex-col space-y-3">
                           <PackagePlus size={22}/>
                           <h2 className="font-bold text-xl">Criar coleção</h2>
                           <p className="text-muted-foreground text-sm">Crie coleções para organizar seus ambientes e gerenciar de forma mais prática o seu dia a dia!</p>
                           <div>
                              <Button  variant="outline"><Plus size={16} className="mr-1 w-full"/> Criar uma nova coleção</Button>
                           </div>
                        </div>
                     </div>
                  </div>
               </TabsContent>
               <TabsContent value="settings">Change your password here.</TabsContent>
            </Tabs>
         </div>
      </div>
   )
}