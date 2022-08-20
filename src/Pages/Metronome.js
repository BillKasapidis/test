import React from 'react';
import click1 from './click1.wav';
import Button from 'react-bootstrap/Button';
import Infobox from './Infobox.js';
import './Metronome.css';

export class MyMetronome extends React.Component{
	
	constructor (props){
		super(props);
		this.state = {
			playing: false,
			bpm: 100
		};
		this.click = new Audio(click1);
	}

	changeBPM = (e) => {
		this.setState({
			bpm: this.state.bpm + e.target.innerHTML / 1
		});
	}

	changeBpmSlider = (e) => {
		this.setState({
			bpm: this.state.bpm = e.target.value / 1
		});
	}

	startPlay = () => {
		//If already playing, clear the interval
		//and set playing to false
		if (this.state.playing){
			clearInterval(this.timer);
			this.setState({
				playing:false
			});

		}else{ //Start the timer with currently selected BPM
			this.timer = setInterval(
				this.playSound,
				(60/this.state.bpm) * 1000
			);
			this.setState({
				playing: true
			},
			this.playSound
			);	
		}
	}

	playSound = () => {
		this.click.volume = 0.5;
		this.click.play();
	}

	render(){
		const {playing, bpm} = this.state;

		return(
			<>
			<Infobox type='Metronome' />
			<div className='metronome-div'>
				<h1>Welcome To My Metronome!</h1>
				<div className='metronome'>
					<span>{bpm} BPM </span>

					<input type="range" min="30" max="300" value={bpm} onChange = {this.changeBpmSlider}></input>
					{' '}
					<p>
						<Button onClick={this.changeBPM}>-1</Button>{' '}<Button onClick={this.changeBPM}>-10</Button> {' '}
						<Button onClick={this.changeBPM}>+1</Button>{' '}<Button onClick={this.changeBPM}>+10</Button> {' '}
					</p>
					<Button onClick={this.startPlay} variant="outline-dark" size="lg">{playing ? 'Stop' : 'Play'}</Button> 
					
				</div>
			</div>
		</>
		);
	}
	
}


