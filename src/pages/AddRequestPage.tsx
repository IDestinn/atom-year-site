import StageStepper from "@/components/Stepper";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

export default function AddRequestPage() {
  return (
    <div className="mx-6 my-4">
      <div className="flex items-center justify-between">
        <h1 className="font-bold">Новая заявка</h1>
        <Button variant="outline">ПАМЯТКА ПРОГРАММЫ</Button>
      </div>
      <StageStepper currentStep={1} />
      <Tabs defaultValue="main" className="w-full">
        <TabsList>
          <TabsTrigger value="main">Основные сведения</TabsTrigger>
          <TabsTrigger value="criteria">Суть инициативы и критерии</TabsTrigger>
          <TabsTrigger value="approval">Журнал согласований</TabsTrigger>
        </TabsList>
        <TabsContent value="main">
          <div className="grid grid-cols-2 gap-4 p-5">
            {RequestCard()}
            {NomineesCard()}
            {GoalsCard()}
            {ConsentCard()}
            {ConditionsCard()}
          </div>
        </TabsContent>
        <TabsContent value="criteria"></TabsContent>
        <TabsContent value="approval"></TabsContent>
      </Tabs>
    </div>
  );
}

function RequestCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Заявка</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 p-5">
          <p>Год</p>
          <p>2023</p>

          <p>Вид заявки</p>
          <Select>
            <SelectTrigger className="w-[250px]"></SelectTrigger>
            <SelectContent>
              <SelectItem key="solo" value="solo">
                Индивидуальная
              </SelectItem>
              <SelectItem key="group" value="group">
                Групповая от 2 до 10 человек
              </SelectItem>
            </SelectContent>
          </Select>

          <p>Название команды проекта</p>
          <Select>
            <SelectTrigger className="w-[250px]"></SelectTrigger>
            <SelectContent></SelectContent>
          </Select>

          <p>Дивизион</p>
          <Select>
            <SelectTrigger className="w-[250px]"></SelectTrigger>
            <SelectContent></SelectContent>
          </Select>

          <p>Организация</p>
          <Select>
            <SelectTrigger className="w-[250px]"></SelectTrigger>
            <SelectContent></SelectContent>
          </Select>

          <p>Номинация</p>
          <Select>
            <SelectTrigger className="w-[250px]"></SelectTrigger>
            <SelectContent></SelectContent>
          </Select>

          <p>Тип номинации</p>
          <Select>
            <SelectTrigger className="w-[250px]"></SelectTrigger>
            <SelectContent></SelectContent>
          </Select>

          <p>Общая информация</p>
          <Select>
            <SelectTrigger className="w-[250px]"></SelectTrigger>
            <SelectContent></SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  );
}

function NomineesCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Номинанты</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Добавить</Button>
      </CardContent>
    </Card>
  );
}

function GoalsCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Стратегические цели ГК Росатом, которым соответствует проект
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Checkbox />
      </CardContent>
    </Card>
  );
}

function ConsentCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Согласие участников</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Что-то там</p>
      </CardContent>
    </Card>
  );
}

function ConditionsCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Условия участия</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Что-то там</p>
      </CardContent>
    </Card>
  );
}
