//css

import "./WorkContactContent.css"

//utils
import { ContainerCard, ContainerSection } from "@cu/containers/Containers";
import { TypeBody2, TypeSubTitle1 } from "@cu/fonts/Type";
import ContactIconCollection from "@cu/interface/ui/ContactIconCollection";

export default function WorkContactContent() {
    return (
        <ContainerSection className="WorkContactContent"  >
            <div className="workContactContent__content">
                <ContainerCard className="workContactContent__card" animation={"fade-up"} duration={"2000"}>
                    <TypeSubTitle1 className="workContactContent__cardTitle">Redes Sociales</TypeSubTitle1>
                    <TypeBody2 className="workContactContent__cardTxt">Ponte en contacto conmigo a través de las redes sociales.</TypeBody2>
                    <ContactIconCollection/>
                </ContainerCard>
            </div>
        </ContainerSection>
    )
}