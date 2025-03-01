import Header from "@/components/Header"
import Sidebar from "@/components/Sidebar";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const Layout = async ({ children }) => {
    // const accessToken = await cookies().get('accessToken')?.value;
    // if (!accessToken) {
    //     redirect('/login');
    // }
    return (
        <div className="min-h-screen md:px-4 px-2 py-2">
            <div>
                <Header />
            </div>
            <div className="flex">
                {/* sidebar */}
                <div>
                    <Sidebar />
                </div>
                <div className="p-4 h-screen overflow-scroll">
                    {children}
                </div>
            </div>

        </div>
    )
}

export default Layout