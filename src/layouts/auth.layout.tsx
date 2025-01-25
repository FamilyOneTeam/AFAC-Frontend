import { IAuthLayout } from "./interfaces";

export default function AuthLayout({ children }: IAuthLayout) {
  return (
    <main className="relative">
      <div className=" max-w-5xl mx-auto min-h-screen grid md:grid-cols-2 p-2 md:p-4">
        {children}
      </div>
      <div className="absolute bottom-0 h-5 w-full flex">
        <div className=" bg-redNormal h-full w-1/4"></div>
        <div className=" bg-orangeNormal h-full w-1/4"></div>
        <div className=" bg-yellowNormal h-full w-1/4"></div>
        <div className=" bg-greenNormal h-full w-1/4"></div>
      </div>
    </main>
  );
}
