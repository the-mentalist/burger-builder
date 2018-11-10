import React from 'react';

import Modal from '../../components/UI/Modal/Modal';

// global error handler
const errorHandler = (WrappedElement, axios) => {
    return class extends Component {
        state = {
            error: null
        }

        componentWillMount () {
            axios.interceptors.request.use(req => {
                this.setState({error: null});
                return req;
            });
            axios.interceptors.response.use(res => res, error => {
                this.setState({error: error});
            });
        }

        closeModal = () => {
            this.setState({error: null});
        }

        render () {
            return (
                <div>
                    <Modal show={this.state.error} modalClosed={this.closeModal}>Oops! Something went wrong..</Modal>    
                    <WrappedElement {...props} />
                </div>
            )
        }
    }
}

export default errorHandler;