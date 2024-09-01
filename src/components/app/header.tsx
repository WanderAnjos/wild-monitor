import { Box, SlidersHorizontal } from 'lucide-react'
import Image from 'next/image'
import { Button } from '../ui/button'
import { Tabs, TabsList, TabsTrigger } from '../ui/tabs'

export function Header() {
  return (
    <div className="w-full bg-zinc-900 px-4 py-2">
      <div className="flex w-full items-center justify-between">
        <div>
          <div className="">
            <Image alt="" src="/logo.svg" width={30} height={30} />
          </div>
        </div>
        <div>
          <Button size="sm">Conectar</Button>
        </div>
      </div>

      <div className="mt-6 flex w-full flex-col gap-2">
        <Tabs defaultValue="collections">
          <TabsList>
            <TabsTrigger value="collections">
              <Box size={16} className="mr-1" /> Coleções
            </TabsTrigger>
            <TabsTrigger value="settings">
              <SlidersHorizontal size={16} className="mr-1" /> Configurações
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  )
}
