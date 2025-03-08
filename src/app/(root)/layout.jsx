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
        <div className="min-h-screen bg-[#EAEAEA] dark:bg-black p-[6px] sm:p-3">

            <div className="flex gap-2">
                {/* sidebar */}
                <div>
                    <Sidebar />
                </div>
                <div className="flex-1">
                    <div>
                        <Header />
                    </div>
                    <div className="sm:p-2 mt-[6px] p-[1px] sm:mt-0 rounded-2xl pr-0 h-[87vh] overflow-scroll home">
                        {children}
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Layout