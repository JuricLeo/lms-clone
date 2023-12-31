import { Navbar } from "./_components/navbar";
import { Sidebar } from "./_components/sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full overflow-x-hidden">
      <div className="w-full h-[80px] md:pl-56 fixed inset-y-0 z-50">
        <Navbar />
      </div>
      <div className="hidden md:flex w-56 h-full flex-col fixed inset-y-0 z-50">
        <Sidebar />
      </div>
      <main className="md:pl-56 pt-[80px] h-full">{children}</main>
    </div>
  );
};

export default DashboardLayout;
