import React, {Component} from "react";
import './Car.scss';
import PropTypes from 'prop-types';
import withClass from '../hoc/withClass';

class Car extends Component {

    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }

    componentDidMount() {
        if (this.props.index === 0) {
            this.inputRef.current.focus();
        }
    }

    render() {
        const inputClases = ['input'];

        if (this.props.name !== '') {
            inputClases.push('green')
        } else {
            inputClases.push('red')
        }
        if (this.props.name.length > 4) {
            inputClases.push('bold');
        }

        return (
            <React.Fragment>
                <h3>Сar name: {this.props.name}</h3>
                <p>Year: <strong>{this.props.year}</strong></p>
                <input type="text"
                       onChange={this.props.onChangeName}
                       value={this.props.name}
                       className={inputClases.join(' ')}
                       ref={this.inputRef}
                />
                <button onClick={this.props.onDelete}>Delete</button>
            </React.Fragment>
        )
    }
}

Car.propTypes = {
  name: PropTypes.string,
  index: PropTypes.number,
  year: PropTypes.number,
  onChangeName: PropTypes.func,
  onDelete: PropTypes.func,
};

export default withClass(Car, 'Car');