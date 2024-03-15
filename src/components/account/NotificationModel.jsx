import { useState } from "react";
import { Button, Modal } from "keep-react";
import { EnvelopeSimpleOpen } from "phosphor-react";

const NotificationModel = ({ title, message }) => {
  const [showModal, setShowModal] = useState(false);
  const onClick = () => {
    setShowModal(!showModal);
  };
  return (
    <>
      <button
        className="btn btn-outline hover:bg-green-200 hover:border-none hover:text-white btn-sm"
        onClick={onClick}
      >
        Details
      </button>
      <Modal
        icon={<EnvelopeSimpleOpen size={28} color="#1B4DFF" />}
        size="xl"
        show={showModal}
        position="center"
      >
        <Modal.Header>{title}</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-body-4 leading-relaxed text-metal-500">
              {message}
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button type="outlineGray" onClick={onClick}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default NotificationModel;
