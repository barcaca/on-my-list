import { Header } from '@/components/header'
import { TaskList } from '@/components/task-list'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function Home() {
  return (
    <main className="grid h-full grid-rows-6 lg:grid-cols-2">
      <div className="row-span-2 row-start-2 mx-auto flex max-w-lg items-center justify-center p-6">
        <Header />
      </div>
      <div className="row-start-4 mx-auto  lg:col-start-2 lg:row-start-2">
        <Tabs defaultValue="all" className="w-[600px] p-4">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="complete">Complete</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="w-full">
            <TaskList tabValue="all" />
          </TabsContent>
          <TabsContent value="active">
            <TaskList tabValue="active" />
          </TabsContent>
          <TabsContent value="complete">
            <TaskList tabValue="complete" />
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}
