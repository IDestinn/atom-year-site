import StageStepper from "@/components/Stepper";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

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
      <div className="text-right">
        <Button className="my-3">Сохранить в черновик</Button>
        <Button variant="secondary" className="my-3">
          Создать PPTX
        </Button>
      </div>
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
          <Label>Год</Label>
          <Label>2023</Label>

          <Label>Вид заявки</Label>
          <Select>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="solo">Индивидуальная</SelectItem>
              <SelectItem value="group">
                Групповая от 2 до 10 человек
              </SelectItem>
            </SelectContent>
          </Select>

          <Label>Название команды проекта</Label>
          <Input type="text" />

          <Label>Дивизион</Label>
          <Select>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent></SelectContent>
          </Select>

          <Label>Организация</Label>
          <Select>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent></SelectContent>
          </Select>

          <Label>Тип номинации</Label>
          <Select>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Дивизиональная номинация">
                Дивизиональная номинация
              </SelectItem>
              <SelectItem value="Общедивизиональная (сквозные) номинация">
                Общедивизиональная (сквозные) номинация
              </SelectItem>
              <SelectItem value="Общекорпоративная номинация">
                Общекорпоративная номинация
              </SelectItem>
              <SelectItem value='Специальная номинация генерального директора ГК "Росатом"'>
                Специальная номинация генерального директора ГК "Росатом"
              </SelectItem>
              <SelectItem value='Специальный приз председателя наблюдательного совета ГК "Росатом"'>
                Специальный приз председателя наблюдательного совета ГК
                "Росатом"
              </SelectItem>
            </SelectContent>
          </Select>

          <Label>Номинация</Label>
          <Select>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent></SelectContent>
          </Select>

          <Label>Общая информация</Label>
          <Input type="text" />
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
            <Label>Новые продукты для российского и международных рынков</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="achivment" />
            <Label>
              Достижение глобального лидерства в ряде передовых технологий
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="powerup" />
            <Label>Повышение доли на международных рынках</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="speedup" />
            <Label>
              Снижение себестоимости продукции и сроков протекания процессов
            </Label>
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
        <div className="mb-5 grid grid-cols-2 gap-4">
          <Label>Согласия на обработку персональных данных</Label>
          <Input type="file" id="consent" />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="flex items-center space-x-2">
            <Checkbox id="thats-all" />
            <Label>Загружены данные на обработку ПДН всех участников</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="personal-data" />
            <Label>Согласие на обработку персональных данных</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="other-personal-data" />
            <Label>Согласие на распространения персональных данных</Label>
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
            <Label>Стаж работы в Росатоме более 1 года</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="no-problems" />
            <Label>Отсутствие нарушений требований ОТ и ПБ</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="discipline" />
            <Label>Отсутствуют дисциплинарные взыскания</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="go-secret" />
            <Label>Данные не содержат гос. тайну</Label>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
