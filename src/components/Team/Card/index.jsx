import { CardContainer } from '../style'

export default function Card(props) {
  return (
    <CardContainer>
      <h3>{props.name}</h3>
      <span>Sócio</span>

      <p>{props.description}</p>
    </CardContainer>
  )
}