import styled from "styled-components"

const Wrapper = styled.aside`
  background-color: var(--blue-100);
  padding: 1rem;
  border-radius: 4px;
  color: var(--gray-700);
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.75rem;
`

function Callout({ emoji, children }) {
  return (
    <Wrapper>
      {emoji ? <div>{emoji}</div> : null}
      <div>{children}</div>
    </Wrapper>
  )
}

export default Callout
