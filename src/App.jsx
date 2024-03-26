import Editor from './components/Editor'
import Preview from './components/Preview'
import { MarkdownProvider } from './context/markdown'

const App = () => (
	<MarkdownProvider>
		<main className="min-h-screen grid grid-rows-2 md:grid-rows-none md:grid-cols-2">
			<Editor />
			<Preview />
		</main>
	</MarkdownProvider>
)

export default App
