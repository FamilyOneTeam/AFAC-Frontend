import HomeLayout from "@/layouts/home.layout";
import Help from "@/components/shared/help";
import WelcomeUser from "@/features/shared/welcome-user";
import Actions from "../components/actions";

export default function DashboardFamily() {
    return (
      <HomeLayout>
        <main className="relative grid gap-8 pt-12 md:pt-16 px-4 w-full max-w-5xl mx-auto">
          <WelcomeUser />
          <Actions />
          <div className=" max-w-5xl mx-auto">
            <Help />
          </div>
        </main>
      </HomeLayout>
    );
}