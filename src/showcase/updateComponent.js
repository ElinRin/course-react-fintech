import React, {Component} from 'react';

export default class UpdateComponent extends Component {
    shouldComponentUpdate(nextProps) {
        const {status, accounts } = this.props;
        return (
          status !== nextProps.status ||
          accounts !== nextProps.accounts
        );
    }

    render() {
        const {children} = this.props;
        return <div>{children}</div>
    }
}
