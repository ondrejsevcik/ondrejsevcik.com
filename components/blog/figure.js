import styled from "styled-components"

const FigureEl = styled.figure`
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  gap: 1rem;
  align-items: center;
`

const FigCaption = styled.figcaption`
  max-width: 32rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
`

function Figure({ src, alt, maxWidth, children }) {
  const caption = children || alt || null

  return (
    <FigureEl>
      <a href={src} style={{ maxWidth: maxWidth ?? "100%" }}>
        <img src={src} alt={alt} />
      </a>
      {caption ? <FigCaption>{caption}</FigCaption> : null}
    </FigureEl>
  )
}

export default Figure
