//css

import "./BioContactContent.css"
//utils
import { ContainerCard, ContainerSection } from "@cu/containers/Containers";
import { TypeBody2, TypeSubTitle1 } from "@cu/fonts/Type";
import ContactIconCollection from "@cu/interface/ui/ContactIconCollection";

export default function BioContactContent() {
    return (
        <ContainerSection className="BioContactContent">
            <div className="bioContactContent__content">
                <ContainerCard className="bioContactContent__card" animation={"fade-up"} duration={"2000"}>
                    <TypeSubTitle1 className="bioContactContent__cardTitle">Redes Sociales</TypeSubTitle1>
                    <TypeBody2 className="bioContactContent__cardTxt">Ponte en contacto conmigo a través de las redes sociales.</TypeBody2>
                    <ContactIconCollection/>
                </ContainerCard>
            </div>
        </ContainerSection>
    )
}