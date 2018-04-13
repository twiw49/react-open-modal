import React, { Component } from "react";
import ReactDOM from "react-dom";
import "babel-polyfill";
import Presenter from "./Modal";

const openModal = (importContent, props) => {
  class Modal extends Component {
    constructor(props) {
      super(props);

      this.state = {
        component: null
      };

      this.closeModal = this.closeModal.bind(this);
    }

    async componentDidMount() {
      const ic = await importContent();

      this.setState({
        component: ic.default
      });
    }

    componentWillUnmount() {
      document.body.removeChild(this.props.container);
    }

    closeModal() {
      ReactDOM.unmountComponentAtNode(this.props.container);
    }

    render() {
      const toPresenter = Object.assign(this.state, props);
      toPresenter.closeModal = this.closeModal;

      return this.state.component ? <Presenter {...toPresenter} /> : null;
    }
  }

  const div = document.createElement("div");
  ReactDOM.render(<Modal container={div} />, document.body.appendChild(div));
};

export default openModal;
