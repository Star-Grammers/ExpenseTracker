'use client';

import { useRouter } from 'next/navigation';
import Button from '@/app/buttons/button';

export default function Page() {
	const router = useRouter();

	return (
		<Button
			type='button'
			onClick={() => router.push('/', { scroll: false })}>
			Go back
		</Button>
	);
}
