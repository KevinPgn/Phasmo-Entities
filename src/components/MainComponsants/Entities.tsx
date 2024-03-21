import { useEntities } from "../../store/Entities"
import { useEvidences } from "../../store/Evidences";

export const Entities = () => {
  const entities = useEntities((state) => state.entities)
  
  const evidence = useEvidences((state) => state.evidences)
  const notThisEvidences = useEvidences((state) => state.notThisEvidences)

  const filteredEntities = () => {
    if(evidence.length === 0) return entities
    return entities.filter((entity) => {
      return evidence.every((evidence) => entity.evidence.includes(evidence)) && notThisEvidences.every((evidence) => !entity.evidence.includes(evidence))
    })
  }

  console.log(entities);
  

  return <>
    <div className="entities">
      {filteredEntities().map((entity) => (
        <div key={entity.id} className="card">
          <h2>{entity.name}</h2>
          <p className="preuves">{entity.evidence.map((item) => {
            return <span key={item}>{item}</span>
          })}</p>
          <p className="sanity">Sanity: {entity.sanity}</p>
          <p>Speed: {entity.speed}</p>
          {entity.speedIncrease ? <p>Speed Increase: {entity.speedIncrease}</p> : null}
        </div>
      ))}
    </div>
  </>
}