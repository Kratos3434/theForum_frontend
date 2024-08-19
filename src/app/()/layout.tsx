import HomeLayout from "@/components/HomeLayout"

interface Props {
    children: React.ReactNode
}

const LayoutHome = ({children}: Props) => {
    return (
        <HomeLayout>
            {children}
        </HomeLayout>
    )
}

export default LayoutHome;