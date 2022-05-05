import { Link } from 'react-router-dom';
import StarfieldAnimation from 'react-starfield-animation';

const Contact = () => {
	return (
		<div
			style={{
				backgroundColor: 'black',
				height: '100vh',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<>
				<StarfieldAnimation
					style={{
						position: 'absolute',
						width: '100%',
						height: '100%',
					}}
				/>
			</>
			<h1 style={{ color: 'white', fontSize: '40px', fontFamily: 'cursive' }}>
				If you are interested, I am ready to introduce you myself!
				<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '30px' }}>
					Contact-Me: abashia.nikoloza@gmail.com
				</div>
				<Link to="/" style={{ textDecoration: 'none', color: 'darkRed' }}>
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							marginTop: '30px',
							position: 'relative',
						}}
					>
						Go Back
					</div>
				</Link>
			</h1>
		</div>
	);
};

export default Contact;
