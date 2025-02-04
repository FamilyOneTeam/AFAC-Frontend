import Navbar from "@/components/shared/navbar";
import { IAuthLayout } from "./interfaces";

export default function HomeLayout({ children }: IAuthLayout) {
  return (
    <main className="relative bg-BgNormal min-h-screen">
      <Navbar />
      <div className="grid gap-6">
        {children}
      </div>
    </main>
  );
}
