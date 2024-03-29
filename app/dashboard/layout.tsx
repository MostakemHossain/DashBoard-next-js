import Sidenav from "../ui/dashboard/sidenav";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
      <div className="flex flex-col md:flex-row md:overflow-hidden h-screen">
        <div className="w-full flex-none md:w-64"><Sidenav/></div>
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
          {children}
        </div>
      </div>
    );
  };
  
  export default Layout;
  