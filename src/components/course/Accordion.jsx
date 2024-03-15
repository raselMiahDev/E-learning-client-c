import { Accordion } from "keep-react";
import { CaretDown, CaretUp } from "phosphor-react";

const AccordionComponent = () => {
  return (
    <Accordion openIcon={<CaretUp />} closeIcon={<CaretDown />} iconPosition="right" flush={true}>
      <Accordion.Panel>
        <Accordion.Title>What is the purpose of the Keep React?</Accordion.Title>
        <Accordion.Content>
          <p>
            The Keep React is a collection of UI components, styles, and guidelines that ensure consistency
            and a unified user experience across our products. It simplifies the design and development
            process by providing ready-to-use components that can be easily customized and integrated into
            various applications.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
};

export default AccordionComponent;
