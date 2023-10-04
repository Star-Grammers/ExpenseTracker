export default function Button({ children }) {
	return (
		<button className=' bg-blue-700  text-white rounded-full text-xs font-bold border-blue-500 container mx-auto'>
			{children}
		</button>
	);
}
