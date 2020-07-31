import React from 'react';
import Loader from './Loader';
import Input from './Input';
import City from './City';
import { TCity } from '../../types/City';
import AnimatedPanel from '../AnimatedPanel';

interface IProps {
    onSelect: (city: TCity) => void;
}

interface IState {
    cities: TCity[];
    matchingCities: TCity[];
    value: string;
    loading: boolean;
    hasError: boolean;
    isPanelOpened: boolean;
}

class CitySelector extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            cities: [],
            matchingCities: [],
            value: '',
            loading: true,
            hasError: false,
            isPanelOpened: false
        };
    }

    componentDidMount(): void {
        // On cache le fetch dans un timeout pour apprécier ce beau loader
        window.setTimeout(() => {
            this.fetchCities();
        }, 500);
    }

    async fetchCities(): Promise<void> {
        try {
            const response = await fetch('http://localhost:3000/cities');
            const results: TCity[] = await response.json();

            this.setState({
                cities: results,
                loading: false
            });
        } catch (e) {
            this.setState({
                loading: false,
                hasError: true
            });
        }
    }

    openSuggestionPanel(): void {
        this.setState({
            isPanelOpened: true
        });
    }

    closeSuggestionPanel(): void {
        this.setState({
            isPanelOpened: false
        });
    }

    handleChange = (e: any): void => {
        const value: string = e.target.value;
        if (value === '') {
            this.closeSuggestionPanel();
            this.setState({
                matchingCities: [],
            })
            return;
        }

        const matchingCities: TCity[] = this.state.cities.filter(city => city.name.includes(value));

        this.setState({
            matchingCities,
        })

        this.openSuggestionPanel();
    };

    onSelectCity = (cityId: string): void => {
        const city: TCity = this.state.cities.find(city => city._id === cityId);
        if (city) {
            this.props.onSelect(city);
            this.closeSuggestionPanel();
        }
    };

    content(): JSX.Element {
        // on aurait pu faire un ternaire mais c'est pas très beau
        if (this.state.hasError) {
            return <div>Erreur lors de la récupération des villes</div>;
        } else {
            return (
                <>
                    <Input onChange={this.handleChange} />
                    <AnimatedPanel isOpened={this.state.isPanelOpened}>
                        <>
                            {this.state.matchingCities.map((city: TCity): JSX.Element =>
                                <City key={city._id} city={city} onSelect={this.onSelectCity} />
                            )}
                        </>
                    </AnimatedPanel>
                </>
            );
        }
    }

    render(): JSX.Element {
        return (
            this.state.loading ? <Loader /> : this.content()
        );
    }
}

export default CitySelector;