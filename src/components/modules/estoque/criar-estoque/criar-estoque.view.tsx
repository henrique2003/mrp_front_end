import { Container as ContainerIcon } from 'lucide-react'
import { Container, Label, Input, SelectValue, SelectTrigger, SelectItem, SelectContent, Select, Card, CardContent } from '@/components/core'

export const CriarEstoqueView: React.FC = () => {
  return (
    <Container title='Estoque' icon={<ContainerIcon className="h-6 w-6" />}>
      <h2 className="text-lg font-semibold">Criar novo item</h2>
      <Card className='mt-5'>
        <CardContent className='mt-5'>
          <div className="space-y-4">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Enter your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="Enter your email" type="email" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Select>
                  <SelectTrigger className="w-[100%]">
                    <SelectValue placeholder="Select a number" />
                  </SelectTrigger>
                  <SelectContent className="mt-1 p-0.5">
                    <SelectItem value="1">One</SelectItem>
                    <SelectItem value="2">Two</SelectItem>
                    <SelectItem value="3">Three</SelectItem>
                    <SelectItem value="4">Four</SelectItem>
                    <SelectItem value="5">Five</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Container>
  )
}
