import { FC } from "react";
import { Button, Modal } from 'react-bootstrap';
import { memberMapper } from "shared/constant/constant";
import { IPaymentModel } from "../interface/summary.interface";


const PaymentModal: FC<IPaymentModel> = (props) => {
    const { memberName, isShowPopUp, handleOnClose, handleOnPaid } = props;
    return (
        <Modal show={isShowPopUp} onHide={handleOnClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Payment done</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Are You sure {memberMapper[memberName]?.name} has paid?</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleOnClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleOnPaid}>
                    Yes Paid
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default PaymentModal;