import HomeLayout from "@/layouts/home.layout";
import WelcomeUser from "../../shared/welcome-user";
import Overview from "./components/overview";
import Actions from "./components/actions";
import SendEmails from "./components/send-emails";
import Help from "@/components/shared/help";

export default function Dashboard() {
    return (
      <HomeLayout>
        <main className="relative grid gap-8 pt-12 md:pt-16 px-4 w-full max-w-5xl mx-auto">
          <WelcomeUser />
          <Overview />
          <Actions />
          <SendEmails />
          <div className=" max-w-5xl mx-auto">
            <Help />
          </div>
        </main>
      </HomeLayout>
    );
}