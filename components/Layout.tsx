import FollowBar from "./layout/FollowBar";
import Sidebar from "./layout/Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-screen bg-black overflow-hidden select-none">
      <div className="h-full mx-auto w-full px-4 sm:px-6 md:px-8 xl:px-12 max-w-7xl">
        <div className="grid grid-cols-5 h-full gap-2 md:gap-4 lg:gap-6">
          <div className="col-span-1 h-full">
            <Sidebar />
          </div>
          <div className="col-span-4 lg:col-span-3 border-x border-neutral-800 h-full overflow-y-auto">
            {children}
          </div>
          <div className="hidden lg:block lg:col-span-1 h-full">
            <FollowBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
