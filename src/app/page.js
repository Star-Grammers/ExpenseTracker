'use client';

import Link from 'next/link';
import Button from './buttons/button';
// import WebcamCapture from '@/app/about/camera/page.js';
import React, { useState } from 'react';
import Webcam from 'react-webcam';

const videoConstraints = {
	width: 1280,
	height: 720,
	facingMode: 'user',
};

const WebcamCapture = () => {
	const [image, setImage] = useState(null);
	console.log('🚀⛵🚀  💥 image:', image);

	return (
		<Webcam
			audio={false}
			height={720}
			screenshotFormat='image/jpeg'
			width={1280}
			videoConstraints={videoConstraints}>
			{({ getScreenshot }) => (
				<button
					onClick={() => {
						const imageSrc = getScreenshot();
						setImage(imageSrc);
						console.log('🚀⛵🚀  💥 imageSrc:', imageSrc);
					}}>
					Capture photo
				</button>
			)}
		</Webcam>
	);
};

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
				<WebcamCapture />
			</div>
		</>
	);
}
