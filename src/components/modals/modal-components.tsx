import Modals from "./modals";
import {
  MODAL_CONSTANT_DATA,
  education,
  experience,
  skills,
} from "../../constants/ui-constants/ui-constants";
import { MODAL_COMPONENTS_STYLE } from "./modal-components.style";

function ModalComponents() {
  return (
    <>
      <div style={MODAL_COMPONENTS_STYLE.container}>
        {MODAL_CONSTANT_DATA.map((d) => (
          <div style={MODAL_COMPONENTS_STYLE.subContainer} key={d.id}>
            <img
              src={d.image}
              alt={d.heading}
              style={MODAL_COMPONENTS_STYLE.img}
            />
            <Modals
              buttonText={d.buttonText}
              heading={d.heading}
              experience={experience}
              skills={skills}
              education={education}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default ModalComponents;
