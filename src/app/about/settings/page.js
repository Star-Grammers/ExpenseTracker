import { hongkong } from '@/app/assets';
import Image from 'next/image';
import Back from '../back/page';

export default function page() {
	return (
		<>
			<div>Luis En Hong Kong</div>
			<Image
				src={hongkong}
				width={250}
				height={250}
				alt='blue-butterfly'
			/>
			<Back />
		</>
	);
}
