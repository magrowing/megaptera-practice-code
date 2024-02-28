import ReactDOM from 'react-dom/client';

function main() {
	const container = document.getElementById('root');
	if (!container) {
		return;
	}

	const root = ReactDOM.createRoot(container);
	root.render(<App />);
}

main();
