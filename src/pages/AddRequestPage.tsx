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
      <Button className="my-4">Сохранить в черновик</Button>
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
        <div className="grid grid-cols-2 gap-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="new-products" />
            <p className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Новые продукты для российского и международных рынков
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="achivment" />
            <p className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Достижение глобального лидерства в ряде передовых технологий
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="powerup" />
            <p className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Повышение доли на международных рынках
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="speedup" />
            <p className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Снижение себестоимости продукции и сроков протекания процессов
            </p>
          </div>
        </div>
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
        <div className="grid grid-cols-2 gap-4">
          <p>Согласия на обработку персональных данных</p>
          <p>*Тут будет блок для файлов*</p>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="flex items-center space-x-2">
            <Checkbox id="thats-all" />
            <p className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Загружены данные на обработку ПДН всех участников
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="personal-data" />
            <p className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Согласие на обработку персональных данных
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="other-personal-data" />
            <p className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Согласие на распространения персональных данных
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function ConditionsCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Стратегические цели ГК Росатом, которым соответствует проект
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="year-exp" />
            <p className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Стаж работы в Росатоме более 1 года
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="no-problems" />
            <p className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Отсутствие нарушений требований ОТ и ПБ
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="discipline" />
            <p className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Отсутствуют дисциплинарные взыскания
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="go-secret" />
            <p className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Данные не содержат гос. тайну
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
