import React from 'react';
import merge from 'lodash/merge';
import ModalErrors from './modal_errors';

class QuestionModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.question;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  handleChange(field) {
    return e => this.setState({ [field]: e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const question = merge({}, this.state);
    this.props.handleSubmit(question);
    this.setState({
      body: "",
      asker_id: null
    });
  }

  closeModal(e) {
    if (e.currentTarget === e.target) {
      e.stopPropagation();
      this.props.toggleModal();
    }
  }

  render() {
    const { formType } = this.props;
    const modalId = formType === "edit" ? "edit-modal" : "create-modal";
    const modalHeader = formType === "edit" ? "modal-header" : "modal-header only-close-btn";

    if (this.props.displayModal) {
      return(
        <div className="modal-wrapper" onClick={this.closeModal}>
          <div id={modalId} className="modal">
            <div className={modalHeader}>
              { formType === "edit" &&
                <span className="modal-title">Edit Question</span>
              }

              <div id="modal-close">
                <span>
                  <img onClick={this.closeModal} src={window.images.x} />
                </span>
              </div>
            </div>

            { this.props.errors.length > 0 &&
              <ModalErrors errors={this.props.errors} />
            }

            <form onSubmit={this.handleSubmit}>
              <div className="modal-content">
                <textarea
                  className="modal-textarea text-box"
                  onChange={this.handleChange("body")}
                  type="text" rows="1"
                  placeholder="What is your question?">
                </textarea>
                <div className="modal-space"></div>
              </div>

              <div className="modal-footer">
                <span className="cancel">Cancel</span>
                <input type="submit" value={this.props.buttonText} />
              </div>
            </form>
          </div>
        </div>
      );
    }
  }
}

export default QuestionModal;
