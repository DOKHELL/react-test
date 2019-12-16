import React, {Component} from 'react';
import Car from './Car/Car';
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
import Counter from "./Counter/Counter";

export const ClickedContext = React.createContext(false);


class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            cars: [
                {name: 'Ford', year: 2018},
                {name: 'Audi', year: 2016},
                {name: 'Mazda', year: 2010}
            ],
            pageTitle: 'React components',
            showCars: false,
            clicked: false
        }
    }

    toggleCarsHandler = () => {
        this.setState({
            showCars: !this.state.showCars
        })
    };
    onChangeName(name, index) {
        let car = this.state.cars[index];
        car.name = name;
        const cars = [...this.state.cars];
        cars[index] = car;
        this.setState({
            cars
        })
    }
    deleteHandler(index) {
        const cars = this.state.cars.concat();
        cars.splice(index, 1);

        this.setState({
            cars
        })
    }

    render() {
        const divStyle = {
            textAlign: 'center'
        };

        let cars = null;

        if (this.state.showCars) {
            cars = this.state.cars.map((car, index) => {
                return (
                    <ErrorBoundary key={index}>
                        <Car
                            name={car.name}
                            year={car.year}
                            index={index}
                            onDelete={this.deleteHandler.bind(this, index)}
                            onChangeName={(e) => this.onChangeName(e.target.value, index)}
                        />
                    </ErrorBoundary>
                )
            })
        }

        return (
            <div style={divStyle}>
                <ClickedContext.Provider value={this.state.clicked}>
                    <Counter />
                </ClickedContext.Provider>
                <hr/>
                <h1>{this.props.title}</h1>

                <button
                    onClick={this.toggleCarsHandler}
                    style={{marginTop: '20px'}}
                >Toggle cars</button>

                <button onClick={() => this.setState({clicked: true})}>Change clicked</button>

                { cars }
            </div>
        );
    }
}

export default App;
