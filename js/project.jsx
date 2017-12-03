import	React	from	'react';
import	ReactDOM	from	'react-dom';
import	{	Router,
		Route,
		Link,
		IndexLink,
		IndexRoute,
		hashHistory
}	from	'react-router';


class	Template	extends	React.Component	{
		render()	{
				return	<div>
									{this.props.children}
						</div>;
		}
}

class	Main	extends	React.Component	{
	onClickHadler = () => {
		console.log("działa");
	};

		render()	{
				return	<div className = "mainContainer">
					<h1> Witaj!</h1>
					<h2> Rozwijamy matę?</h2>
					<Link to="/emotions">
						<button onClick={this.onClickHadler} className = "startButton">start</button>
					</Link>
				</div>;
		}
}


class	EmotionEnergy	extends	React.Component	{

		render()	{
				return <div className = "wideContainer">
					<Link to="/videos/energy">
						<button className = "emotionTile">
							brak energii
						</button>
					</Link>
				</div>
				}
		}


		class	EmotionTension	extends	React.Component	{

				render()	{
						return <div className = "wideContainer">
							<Link to="/videos/tension">
								<button className = "emotionTile">
									poddenerwowanie
								</button>
							</Link>
						</div>
						}
				}

class	EmotionCreativity	extends	React.Component	{

	render()	{
			return <div className = "wideContainer">
				<Link to="/videos/creativity">
					<button className = "emotionTile">
						brak motywacji
					</button>
				</Link>
			</div>
			}
	}

class	EmotionInspiration extends	React.Component	{

	render()	{
			return <div className = "wideContainer">
				<Link to="/videos/inspiration">
					<button className = "emotionTile">
						znudzenie
					</button>
				</Link>
			</div>
			}
	}

class	EmotionStress extends	React.Component	{

	render()	{
			return <div className = "wideContainer">
				<Link to="/videos/stress">
					<button className = "emotionTile">
						stres
					</button>
				</Link>
			</div>
			}
	}


class	EmotionsPage	extends	React.Component	{



		render()	{
				return	<div className = "wideContainer">
					<h1>Czuję</h1>
						<EmotionEnergy />
						<EmotionTension/>
						<EmotionCreativity/>
						<EmotionInspiration/>
						<EmotionStress/>
				</div>;
		}

}

class	VideoEnergy	extends	React.Component	{

	constructor(props){
		super(props);
		this.state  = {
			amount: 0
		}
	}

	handlerMeditationChange = (event) => {
		this.setState({amount:event.target.value})
	};

		render()	{
				return	<div className = "wideContainer">
						<h1>Chcę mieć więcej energii!</h1>
						<iframe width="560" height="315" src="https://www.youtube.com/embed/O3uAFfHS4vE?rel=0" frameBorder="0" allowFullScreen></iframe>
						<span>
							<h3>Ile minut medytacji po praktyce?</h3>
							<input type = "text" value = {this.state.amount} onChange = {this.handlerMeditationChange}/>
							<h3>Brawo, konstruktywnie spędzone {12 + parseInt(this.state.amount)} minut/y!</h3>
							<h3 className = "thanks">Dzięki za wspólną praktykę :) </h3>
						</span>
				</div>;
		}
}

class	VideoTension	extends	React.Component	{

	constructor(props){
		super(props);
		this.state  = {
			amount: 0
		}
	}

	handlerMeditationChange = (event) => {
		this.setState({amount:event.target.value})
	};

		render()	{
				return	<div className = "wideContainer">
						<h1>Chcę się wyciszyć!</h1>
						<iframe width="560" height="315" src="https://www.youtube.com/embed/oXSK5yQLpC0?rel=0" frameBorder="0" allowFullScreen></iframe>
						<span>
							<h3>Ile minut medytacji po praktyce?</h3>
							<input type = "text" value = {this.state.amount} onChange = {this.handlerMeditationChange}/>
							<h3>Brawo, konstruktywnie spędzone {9 + parseInt(this.state.amount)} minut/y!</h3>
							<h3 className = "thanks">Dzięki za wspólną praktykę :) </h3>
						</span>
				</div>;
		}
}

class	VideoCreativity	extends	React.Component	{

	constructor(props){
		super(props);
		this.state  = {
			amount: 0
		}
	}

	handlerMeditationChange = (event) => {
		this.setState({amount:event.target.value})
	};

		render()	{
				return	<div className = "wideContainer">
						<h1>Chcę mieć więcej motywacji!</h1>
						<iframe width="560" height="315" src="https://www.youtube.com/embed/G1Yh0nggriY?rel=0" frameBorder="0" allowFullScreen></iframe>
						<span>
							<h3>Ile minut medytacji po praktyce?</h3>
							<input type = "text" value = {this.state.amount} onChange = {this.handlerMeditationChange}/>
							<h3>Brawo, konstruktywnie spędzone {8 + parseInt(this.state.amount)} minut/y!</h3>
							<h3 className = "thanks">Dzięki za wspólną praktykę :) </h3>
						</span>
				</div>;
		}
}

class	VideoInspiration	extends	React.Component	{

	constructor(props){
		super(props);
		this.state  = {
			amount: 0
		}
	}

	handlerMeditationChange = (event) => {
		this.setState({amount:event.target.value})
	};

		render()	{
				return	<div className = "wideContainer">
						<h1>Chcę mieć więcej pomysłów!</h1>
						<iframe width="560" height="315" src="https://www.youtube.com/embed/EP-qdYFGOMY?rel=0" frameBorder="0" allowFullScreen></iframe>
						<span>
							<h3>Ile minut medytacji po praktyce?</h3>
							<input type = "text" value = {this.state.amount} onChange = {this.handlerMeditationChange}/>
							<h3>Brawo, konstruktywnie spędzone {10 + parseInt(this.state.amount)} minut/y!</h3>
							<h3 className = "thanks">Dzięki za wspólną praktykę :) </h3>
						</span>
				</div>;
		}
}

class	VideoStress	extends	React.Component	{

	constructor(props){
		super(props);
		this.state  = {
			amount: 0
		}
	}

	handlerMeditationChange = (event) => {
		this.setState({amount:event.target.value})
	};

		render()	{
				return	<div className = "wideContainer">
						<h1>Chcę się odstresować!</h1>
						<iframe width="560" height="315" src="https://www.youtube.com/embed/LBIZFYNHvXA?rel=0" frameBorder="0" allowFullScreen></iframe>
						<span>
							<h3>Ile minut medytacji po praktyce?</h3>
							<input type = "text" value = {this.state.amount} onChange = {this.handlerMeditationChange}/>
							<h3>Brawo, konstruktywnie spędzone {12 + parseInt(this.state.amount)} minut/y!</h3>
							<h3 className = "thanks">Dzięki za wspólną praktykę :) </h3>
						</span>
				</div>;
		}
}


class	NotFound	extends	React.Component	{
		render()	{
				return	<div className = "wideContainer">
							<h1> error 404</h1>
							<h2>ooops, something went wrong</h2>
						</div>;
		}
}

class	App	extends	React.Component	{
		render()	{
				return	<Router	history={hashHistory}>
									<Route	path='/'	component={Template}>
										<IndexRoute	component={Main}	/>
										<Route	path='/emotions'	component={EmotionsPage}	/>
										<Route	path='/videos/energy'	component={VideoEnergy}	/>
										<Route	path='/videos/tension'	component={VideoTension}	/>
										<Route	path='/videos/creativity'	component={VideoCreativity}	/>
										<Route	path='/videos/inspiration'	component={VideoInspiration}	/>
										<Route	path='/videos/stress'	component={VideoStress}	/>
										<Route	path='*'	component={NotFound}	/>
									</Route>
								</Router>;
		}
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
