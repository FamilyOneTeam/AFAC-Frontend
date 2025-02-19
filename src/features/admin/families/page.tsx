import HomeLayout from "@/layouts/home.layout";
import { Link } from "react-router-dom";
import SearchFamily from "./components/search-family";
import FamilyCard from "./components/family-card";
import DeleteFamily from "./components/delete-family";
import { useState } from "react";
import EditFamily from "./components/edit-family";

type families = {
  id: number;
  state: string;
  name: string;
  date: string;
};
// const families: families[] = [];
const families: families[] = [
  {
    id: 1,
    state: "Activa",
    name: "Javier Diaz",
    date: "14.02.2025",
  },
  {
    id: 2,
    state: "Activa",
    name: "Javier Diaz",
    date: "14.02.2025",
  },
  {
    id: 3,
    state: "Activa",
    name: "Javier Diaz",
    date: "14.02.2025",
  },
  {
    id: 4,
    state: "Activa",
    name: "Javier Diaz",
    date: "14.02.2025",
  },
  {
    id: 5,
    state: "Activa",
    name: "Javier Diaz",
    date: "14.02.2025",
  },
];

export default function FamiliesList() {
  const [deleteFamily, setDeleteFamily] = useState(false);
  const [editFamily, setEditFamily] = useState(false);
  return (
    <HomeLayout>
      <main className="relative grid gap-8 pt-12 md:pt-16 px-4 w-full max-w-5xl mx-auto pb-8">
        <div className="flex flex-col gap-2">
          <Link to={"/home"} className="text-sm text-gray-400 underline">
            Volver al Dashboard
          </Link>
          <h1 className="font-semibold text-lg md:text-xl">
            Listado de Familias
          </h1>
        </div>
        <SearchFamily />
        <div className="flex flex-col gap-4">
          {families &&
            families.map((family) => {
              return (
                <FamilyCard
                  key={family.id}
                  id={family.id}
                  name={family.name}
                  date={family.date}
                  state={family.state}
                  setDeleteFamily={setDeleteFamily}
                  setEditFamily={setEditFamily}
                />
              );
            })}
          {deleteFamily && <DeleteFamily setDeleteFamily={setDeleteFamily} />}
          {editFamily && <EditFamily setEditFamily={setEditFamily}/>}
        </div>
      </main>
    </HomeLayout>
  );
}
