import Navbar from "@/components/navbar/Navbar";
// import { Inter } from "next/font/google";

// const inter = Inter({
//     subsets: ["latin"],
//     weight: ["400", "500", "600", "700", "800"],
// });

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
        </>
    );
}
