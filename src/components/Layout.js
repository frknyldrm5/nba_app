import ContainerLayout from "../elements/ContainerLayout";
import MyNavbar from "./MyNavbar";
import MyFooter from "./MyFooter";

export default function Layout() {
    return (
        <ContainerLayout>
            <MyNavbar/>
            <MyFooter/>
        </ContainerLayout>
    );
}