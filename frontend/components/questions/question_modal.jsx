import React from 'react';
import merge from 'lodash/merge';
import ModalErrors from './modal_errors';
import { Redirect } from 'react-router-dom';
import Avatar from 'react-avatar';

class QuestionModal extends React.Component {
  constructor(props) {
    super(props);
    const { question } = props;

    this.state = {
      id: question.id,
      body: question.body,
      askerId: question.asker_id,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.preventDefault = this.preventDefault.bind(this);
    this.preventDefaultForScrollKeys = this.preventDefaultForScrollKeys.bind(this);
    // this.enableKeys = this.enableKeys.bind(this);
    this.disableScroll = this.disableScroll.bind(this);
    this.enableScroll = this.enableScroll.bind(this);
  }

  handleChange(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const question = merge({}, this.state);
    this.enableScroll();
    this.props.handleSubmit(question);
    this.setState({
      id: null,
      body: "",
      askerId: null,
    });
  }

  toggleModal() {
    this.enableScroll();
    this.props.toggleModal();
  }

  closeModal(e) {
    e.stopPropagation();
    if (e.currentTarget === e.target) {
      this.toggleModal();
    }
  }

  render() {
    const { formType } = this.props;
    const modalId = formType === "edit" ? "edit-modal" : "create-modal";
    const modalHeader = formType === "edit" ? "modal-header" : "modal-header only-close-btn";
    const modalContent = formType === "edit" ? "edit-modal-content" : "create-modal-content";
    const textArea = formType === "edit" ? 588 : 556;

    this.disableScroll();

    if (this.props.displayModal) {
      return(
        <div className="modal-wrapper">
          <div className="modal-backdrop" onClick={this.closeModal}>
            <div id={modalId} className="modal" onClick={this.disableScroll}>
              <div className={modalHeader}>
                { formType === "edit" &&
                  <div className="modal-title">
                    <span>Edit Question</span>

                  </div>
                }

                <div className="modal-close">
                  <span className="modal-x" onClick={this.closeModal}>
                    <svg className="close-x-svg" onClick={this.closeModal} viewBox="0 0 20 20" height="20" width="20">
                      <path className="close-x" d="M 5,5 L 15,15 M 15,5 L 5,15" />
                    </svg>
                  </span>
                </div>
              </div>

              { this.props.errors.length > 0 &&
                <ModalErrors errors={this.props.errors} />
              }

              <form onSubmit={this.handleSubmit}>
                <div className={modalContent}>

                  { formType === "create" ? (
                    <div className="user-header">
                      <span className="user-icon">
                        <Avatar name={ this.props.currentUser.name } size={25} round={true} textSizeRatio={2} />
                      </span>
                      <span className="user-asks">
                        {this.props.currentUser.name} asks
                      </span>
                    </div>
                  ) : (
                    <div>

                    </div>
                  )}
                  <div className="modal-text-box">
                    <textarea
                      width={textArea}
                      autoFocus="True"
                      className="modal-textarea text-box"
                      onChange={this.handleChange("body")}
                      onFocus={this.enableKeys}
                      type="text" rows="1"
                      placeholder="What is your question?"
                      value={this.state.body}>
                    </textarea>
                  </div>
                  <div className="modal-space"></div>
                </div>

                <div className="modal-footer">
                  <span className="cancel" onClick={this.closeModal}>
                    Cancel
                  </span>
                  <input type="submit" className="submit-btn question-submit" disabled={!this.state.body} value={this.props.buttonText} />
                </div>
              </form>
            </div>
          </div>
        </div>
      );
    }
  }

  preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault) {
      e.preventDefault();
    }
    e.returnValue = false;
  }

  preventDefaultForScrollKeys(e) {
    const keys = {33: 1, 34: 1, 35: 1, 36: 1};
    // 37: 1, 38: 1, 39: 1, 40: 1
    if (e.keyCode === 27) {
      this.toggleModal();
    } else if (keys[e.keyCode]) {
      this.preventDefault(e);
      return false;
    }
  }

  disableScroll() {
    if (window.addEventListener) {
      window.addEventListener('DOMMouseScroll', this.preventDefault, false);
    }
    window.onwheel = this.preventDefault;
    window.onmousewheel = document.onmousewheel = this.preventDefault;
    window.ontouchmove  = this.preventDefault;
    document.onkeydown = this.preventDefaultForScrollKeys;
  }

  enableScroll() {
    if (window.removeEventListener) {
      window.removeEventListener('DOMMouseScroll', this.preventDefault, false);
    }
    window.onmousewheel = document.onmousewheel = null;
    window.onwheel = null;
    window.ontouchmove = null;
    document.onkeydown = null;
  }
}

export default QuestionModal;
