import { Container as ContainerIcon } from 'lucide-react'
import { Container, Label, Card, CardContent, Input, Button } from '@/components/core'

export const CriarMaterialView: React.FC = () => {
  return (
    <Container title='Estoque | Materiais' icon={<ContainerIcon className="h-6 w-6" />}>
      <h2 className="text-lg font-semibold">Criar novo item</h2>
      <form>
        <Card className='mt-5'>
          <CardContent className='mt-5'>
            <div className="flex flex-col gap-2">
              <Label htmlFor="name">Nome</Label>
              <Input id="name" placeholder="Ex: Madeira" />
            </div>
            <Button type='submit' className='mt-4 h-9'>Salvar</Button>
          </CardContent>
        </Card>
      </form>
    </Container>
  )
}
