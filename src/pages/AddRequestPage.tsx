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
import { useQuery } from "@tanstack/react-query";

export default function AddRequestPage() {
  return (
    <div className="mx-6 my-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">НОВАЯ ЗАЯВКА</h1>
        <Button variant="outline">ПАМЯТКА ПРОГРАММЫ</Button>
      </div>
      <StageStepper currentStep={0} />
      <Tabs defaultValue="main" className="w-full">
        <TabsList>
          <TabsTrigger value="main" className="text-lg">
            Основные сведения
          </TabsTrigger>
          <TabsTrigger value="criteria" className="text-lg">
            Суть инициативы и критерии
          </TabsTrigger>
          <TabsTrigger value="approval" className="text-lg">
            Журнал согласований
          </TabsTrigger>
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
        <Button className="my-3" onClick={save}>
          Сохранить в черновик
        </Button>
        <Button variant="secondary" className="my-3">
          Создать PPTX
        </Button>
      </div>
    </div>
  );
}

function RequestCard() {
  type Division = {
    name: string;
    management_company: string;
  };
  const { data: divisions } = useQuery<Division[]>({
    queryKey: ["request-data", "http://127.0.0.1:8000/divisions/"],
    queryFn: async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/divisions/");
        if (!response.ok) {
          throw new Error("Ошибка получения данных!");
        }
        const json = await response.json();
        return json;
      } catch (error) {
        throw new Error("Поймана ошибка..");
      }
    },
  });
  const renderedDivisions = divisions?.map((division) => (
    <option
      key={division.name}
      value={division.name}
      label={`Управляющая компания: ${division.management_company}`}
    />
  ));

  type Organization = {
    name: string;
    division: string;
  };
  const { data: organizations } = useQuery<Organization[]>({
    queryKey: ["request-data", "http://127.0.0.1:8000/organizations/"],
    queryFn: async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/organizations/");
        if (!response.ok) {
          throw new Error("Ошибка получения данных!");
        }
        const json = await response.json();
        return json;
      } catch (error) {
        throw new Error("Поймана ошибка..");
      }
    },
  });
  const renderedOrganizations = organizations?.map((organization) => (
    <option
      key={organization.name}
      value={organization.name}
      label={`Дивизион: ${organization.division}`}
    />
  ));

  type Nomination = {
    name: string;
    type: string;
  };
  const { data: nominations } = useQuery<Nomination[]>({
    queryKey: ["request-data", "http://127.0.0.1:8000/nominations/"],
    queryFn: async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/nominations/");
        if (!response.ok) {
          throw new Error("Ошибка получения данных!");
        }
        const json = await response.json();
        return json;
      } catch (error) {
        throw new Error("Поймана ошибка..");
      }
    },
  });
  const renderedNominations = nominations?.map((nomination) => (
    <option
      key={nomination.name}
      value={nomination.name}
      label={`Тип номинации: ${nomination.type}`}
    />
  ));

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
          <Input id="selectedDivision" list="divisions" />
          <datalist id="divisions">{renderedDivisions}</datalist>

          <Label>Организация</Label>
          <Input id="selectedOrganization" list="organizations" />
          <datalist id="organizations">{renderedOrganizations}</datalist>

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
          <Input id="selectedNomination" list="nominations" />
          <datalist id="nominations">{renderedNominations}</datalist>

          <Label>Общая информация</Label>
          <textarea
            cols={40}
            rows={5}
            className="bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-foreground"
          />
        </div>
      </CardContent>
    </Card>
  );
}

function NomineesCard() {
  type Nominee = {
    id: number;
    last_name: string;
    first_name: string;
    patronymic: string | null;
  };
  const { data: nominees } = useQuery<Nominee[]>({
    queryKey: ["request-data", "http://127.0.0.1:8000/employees/"],
    queryFn: async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/employees/");
        if (!response.ok) {
          throw new Error("Ошибка получения данных!");
        }
        const json = await response.json();
        return json;
      } catch (error) {
        throw new Error("Поймана ошибка..");
      }
    },
  });
  const renderedNominees = nominees?.map((nominee) => (
    <option
      key={nominee.id}
      value={`${nominee.last_name} ${nominee.first_name} ${nominee.patronymic || ""}`}
    />
  ));

  return (
    <Card>
      <CardHeader>
        <CardTitle>Номинанты</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-10 pb-5">
          <div className="bg-background p-3">
            <Label id="Nominee1">NomineePlaceholder</Label>
          </div>
          <div className="bg-background p-3">
            <Label id="Nominee2">NomineePlaceholder</Label>
          </div>
          <div className="bg-background p-3">
            <Label id="Nominee3">NomineePlaceholder</Label>
          </div>
          <div className="bg-background p-3">
            <Label id="Nominee4">NomineePlaceholder</Label>
          </div>
          <div className="bg-background p-3">
            <Label id="Nominee5">NomineePlaceholder</Label>
          </div>
          <div className="bg-background p-3">
            <Label id="Nominee6">NomineePlaceholder</Label>
          </div>
          <div className="bg-background p-3">
            <Label id="Nominee7">NomineePlaceholder</Label>
          </div>
          <div className="bg-background p-3">
            <Label id="Nominee8">NomineePlaceholder</Label>
          </div>
          <div className="bg-background p-3">
            <Label id="Nominee9">NomineePlaceholder</Label>
          </div>
          <div className="bg-background p-3">
            <Label id="Nominee10">NomineePlaceholder</Label>
          </div>
        </div>
        <hr className="-mt-1 mb-5 p-1" />
        <div className="pb-3">
          <Input id="selectedNominee" list="nominees" />
          <datalist id="nominees">{renderedNominees}</datalist>
        </div>
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

function save() {
  console.log(document.getElementById("go-secret"));
}
