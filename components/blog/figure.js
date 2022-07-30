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

const Img = styled.img`
  border-radius: 4px;
  transition-duration 0.2s;
  transition-property: transform, box-shadow;

  &:hover,
  &:focus {
    transform: scale(1.03);
    --shadow: 0 4px 6px -1px rgb(0 0 0/0.1), 0 2px 4px -2px rgb(0 0 0/0.1);
    box-shadow: 0 0 #0000, 0 0 #0000, var(--shadow);
  }
`

function Figure({ src, alt, maxWidth, children }) {
  const caption = children || alt || null

  return (
    <FigureEl>
      <a href={src} style={{ maxWidth: maxWidth ?? "100%" }}>
        <Img src={src} alt={alt} />
      </a>
      {caption ? <FigCaption>{caption}</FigCaption> : null}
    </FigureEl>
  )
}

export default Figure
