import { createContext, useContext, useState } from 'react'

const MarkdownContext = createContext(null)

export const MarkdownProvider = ({ children }) => {
	const [markdown, setMarkdown] = useState('')

	return (
		<MarkdownContext.Provider value={[markdown, setMarkdown]}>
			{children}
		</MarkdownContext.Provider>
	)
}

export default function useMarkdown() {
	return useContext(MarkdownContext)
}
