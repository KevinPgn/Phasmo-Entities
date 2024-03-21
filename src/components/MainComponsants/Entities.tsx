import { useState } from "react";
import { useEntities } from "../../store/Entities"
import { useEvidences } from "../../store/Evidences";

export const Entities = () => {
  const entities = useEntities((state) => state.entities)
  
  const [isActive, setIsActive] = useState(false)
  const [selectedEntity, setSelectedEntity] = useState<number | null>(null)

  const evidence = useEvidences((state) => state.evidences)
  const notThisEvidences = useEvidences((state) => state.notThisEvidences)

  const filteredEntities = () => {
    if(evidence.length === 0) return entities
    return entities.filter((entity) => {
      return evidence.every((evidence) => entity.evidence.includes(evidence)) && notThisEvidences.every((evidence) => !entity.evidence.includes(evidence))
    })
  }

  const handleClickActive = (id: number) => {
    setIsActive(true)
    setSelectedEntity(id)
  }
  

  return <>
    <div className="entities">
      {filteredEntities().map((entity) => (
        <div key={entity.id} className={isActive && entity.id === selectedEntity ? "card active":"card"} onClick={() => handleClickActive(entity.id)}>
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