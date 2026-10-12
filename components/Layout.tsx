import FollowBar from "./layout/FollowBar";
import Sidebar from "./layout/Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-screen bg-black overflow-hidden select-none">
      <div className="h-full mx-auto w-full px-4 sm:px-6 md:px-8 xl:px-12 max-w-7xl">
        <div className="grid grid-cols-[64px_minmax(0,1fr)] md:grid-cols-[80px_minmax(0,1fr)] lg:grid-cols-[240px_minmax(0,1fr)_240px] h-full gap-2 md:gap-4 lg:gap-6">
          <div className="h-full min-w-0">
            <Sidebar />
          </div>
          <div className="min-w-0 border-x border-neutral-800 h-full overflow-y-auto">
            {children}
          </div>
          <div className="hidden lg:block min-w-0 h-full">
            <FollowBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
