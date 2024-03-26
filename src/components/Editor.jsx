import { useState } from 'react'
import useMarkdown from '../context/markdown'

const Editor = () => {
	const [markdown, setMarkdown] = useMarkdown()
	const [words, setWords] = useState(0)
	const [chars, setChars] = useState(0)

	const updateMarkdown = (event) => {
		const value = event.target.value

		setMarkdown(value)
		const wordCount = (value.match(/(\w+)/g) ?? []).length
		setWords(wordCount)
		setChars(value.length)
	}

	const downloadFile = () => {
		const link = document.createElement('a')
		const file = new Blob([markdown], { type: 'text/plain' })
		link.href = URL.createObjectURL(file)
		link.download = 'Untitled.md'
		link.click()
		URL.revokeObjectURL(link.href)
	}

	return (
		<section className="editor">
			<div className="flex justify-between items-center">
				<h4 className="text-3xl font-bold">Editor</h4>

				<div className="flex gap-x-2.5 text-lg">
					<p>
						<span className="font-bold">{words}</span> Words
					</p>
					<p>
						<span className="font-bold">{chars}</span> Characters
					</p>
					<button onClick={downloadFile}>
						<img src="/download.svg" alt="download icon" />
					</button>
				</div>
			</div>

			<hr />

			<textarea
				className="size-full outline-none resize-none max-h-[80vh]"
				value={markdown}
				onChange={updateMarkdown}
			/>
		</section>
	)
}

export default Editor
