import Image from "next/image"
import { cookies } from "next/headers"
import { redirect } from "next/navigation";
const Layout = async ({ children }) => {
    // const accessToken = await cookies().get('accessToken')?.value;
    // if (accessToken) {
    //     redirect('/');
    // }


    return (
        <div>
            <div className="max-w-7xl min-h-screen mx-auto w-full">
                <div className="px-6 pt-4 pb-0"><Image src='/youtube-icon.svg' width={60} height={60} alt='icon'></Image></div>
                <div className="flex items-center justify-center">{children}</div>
            </div>
        </div>
    )
}

export default Layout