import React, { Component } from 'react';

import Modal from '../../components/UI/Modal/Modal';

// global error handler
const errorHandler = (WrappedElement, axios) => {
    return class extends Component {
        state = {
            error: null
        }

        componentWillMount () {
            this.requestInterceptor = axios.interceptors.request.use(req => {
                this.setState({error: null});
                return req;
            });
            this.responseInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({error: error});
            });
        }
        // this will remove the inactive interceptors
        componentWillUnmount () {
            axios.interceptors.request.eject(this.requestInterceptor);
            axios.interceptors.response.eject(this.responseInterceptor);
        }

        closeModal = () => {
            this.setState({error: null});
        }

        render () {
            return (
                <div>
                    <Modal show={this.state.error} modalClosed={this.closeModal}>Oops! Something went wrong..</Modal>    
                    <WrappedElement {...this.props} />
                </div>
            )
        }
    }
}

export default errorHandler;