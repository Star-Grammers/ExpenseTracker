import { blueButterfly } from '../../assets';
import Image from 'next/image';
export default function page() {
	return (
		<div>
			<div>Luis En La Playa</div>
			<Image
				src={blueButterfly}
				width={250}
				height={250}
				alt='blue-butterfly'
			/>
		</div>
	);
}
