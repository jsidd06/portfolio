import Modals from "./modals";
import { MODAL_CONSTANT_DATA } from "../../constants/ui-constants/ui-constants";
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
              company={d.company}
              duration={d.duration}
              role={d.role}
              tasks={d.tasks}
              technologies={d.technologies}
              project_name={d.project_name}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default ModalComponents;
