import Markdown from 'react-markdown'
import useMarkdown from '../context/markdown'

const Preview = () => {
	const [markdown] = useMarkdown()

	return (
		<section className="preview">
			<h4 className="text-3xl font-bold">Preview</h4>
			<hr />
			<Markdown className="markdown overflow-y-auto max-h-[80vh]">
				{markdown}
			</Markdown>
		</section>
	)
}

export default Preview
