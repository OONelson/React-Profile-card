import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const App = () => {
	return (
		<div className='container'>
			<Avatar />
			<Details />
		</div>
	);
};

const Avatar = () => {
	return (
		<img
			src='profile.jpeg'
			alt='profile'
			className='avatar'
		/>
	);
};

const Details = () => {
	return (
		<div className='content'>
			<h2>Nelson</h2>
			<h3>Frontend Developer</h3>
			<div className='details'>
				<p>
					Hey there I'm a Junior Frontend Developer with the passion of becoming
					very good at what I do. When I'm not coding or learning how to code
					I'm taking care of the house or playing videogames.{' '}
				</p>
				<SkillList />
			</div>
		</div>
	);
};
const SkillList = () => {
	return (
		<div className='skills'>
			<Skill skill='HTML+CSS' />
			<Skill skill='JavaScript' />
			<Skill skill='Git and Github' />
			<Skill skill='Vue JS' />
			<Skill skill='SCSS' />
		</div>
	);
};
const Skill = props => {
	return <span className='skill'>{props.skill}</span>;
};
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
