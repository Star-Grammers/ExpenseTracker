import Link from 'next/link';
import Button from './buttons/button';

export default function Home() {
	return (
		<>
			<div className='grid grid-cols-2 gap-4 content-start ...'>
				<Button>
					<Link href='/about/user'>Luis en la Playa</Link>
				</Button>
				<Button>
					<Link href='/about/settings'>Luis en Hong Kong</Link>
				</Button>
			</div>
		</>
	);
}
