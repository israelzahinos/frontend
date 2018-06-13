import * as React from 'react';
import {User as UserType} from "../../modules/account/types";
import UserInfo from "./UserInfo";
import {Modal, ModalBody} from "../../../reusable";

const Style = require('./User.scss');

export type Props = {
    user: UserType
    buttonText?: string
}

export type State = {
    showModal;
}


class  User extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            showModal: false
        }
    }

    onToggleModal = () => {
        this.setState({showModal: !this.state.showModal});
    };

    render() {
        const {user, buttonText} = this.props;

        return (
            <span>
                <span className={Style.name} onClick={this.onToggleModal}>{buttonText ? buttonText : user.username}</span>

                <Modal isOpen={this.state.showModal} toggle={this.onToggleModal}>
                    <ModalBody>
                        <button type="button" className="close" aria-label="Close" onClick={this.onToggleModal}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <UserInfo user={user}/>
                    </ModalBody>
                </Modal>
            </span>
        )
    }
}

export default User;
