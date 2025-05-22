import Sidebar from "@/components/SideBar";

type DashboardLayoutType = {
  children: React.ReactNode;
};
export default function RootLayout({ children }: DashboardLayoutType) {
  return (
    <section className={`min-h-screen flex  relative bg-gray-100`}>
      <Sidebar />
      <div className="flex-1 container h-screen mx-auto p-5 overflow-y-scroll">
        {children}
      </div>
    </section>
  );
}
