import { useEvidences } from "../../store/Evidences"
import { FaCheck } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

export const Evidences = () => {
  const addEvidence = useEvidences((state) => state.addEvidence)
  const evidences = useEvidences((state) => state.evidences)
  const NotThisEvidences = useEvidences((state) => state.notThisEvidences)    

  return <>
  <div className="container-evidences">
    <h2>Evidences</h2>

    <div className="evidences">

      <div className="evidence">
        <div className="carre" 
          style={{
            backgroundColor: evidences.includes('EMF 5') ? 'rgb(43, 243, 43)' : NotThisEvidences.includes('EMF 5') ? 'rgb(255, 67, 67)' : "#fff"
          }}
          onClick={() => addEvidence('EMF 5')}>
          {evidences.includes('EMF 5') ? <FaCheck className="check"/> : null}
          {NotThisEvidences.includes('EMF 5') ? <RxCross2 className="check"/> : null}
        </div>
        <span>EMF Level 5</span>
      </div>

      <div className="evidence">
        <div className="carre" 
         style={{
          backgroundColor: evidences.includes('Spirit Box') ? 'rgb(43, 243, 43)' : NotThisEvidences.includes('Spirit Box') ? 'rgb(255, 67, 67)' : "#fff"
        }}
          onClick={() => addEvidence('Spirit Box')}>
          {evidences.includes('Spirit Box') ? <FaCheck className="check"/> : null}
          {NotThisEvidences.includes('Spirit Box') ? <RxCross2 className="check"/> : null}
        </div>
        <span>Spirit Box</span>
      </div>

      <div className="evidence">
        <div className="carre" 
        style={{
          backgroundColor: evidences.includes('Writing') ? 'rgb(43, 243, 43)' : NotThisEvidences.includes('Writing') ? 'rgb(255, 67, 67)' : "#fff"
        }}
          onClick={() => addEvidence('Writing')}>
          {evidences.includes('Writing') ? <FaCheck className="check"/> : null}
          {NotThisEvidences.includes('Writing') ? <RxCross2 className="check"/> : null}
        </div>
        <span>Ghost Writing</span>
      </div>

      <div className="evidence">
        <div className="carre" 
          style={{
            backgroundColor: evidences.includes('Freezing') ? 'rgb(43, 243, 43)' : NotThisEvidences.includes('Freezing') ? 'rgb(255, 67, 67)' : "#fff"
          }}
          onClick={() => addEvidence('Freezing')}>
          {evidences.includes('Freezing') ? <FaCheck className="check"/> : null}
          {NotThisEvidences.includes('Freezing') ? <RxCross2 className="check"/> : null}
        </div>
        <span>Freezing Temperatures</span>
      </div>

      <div className="evidence">
       <div className="carre"
        style={{
          backgroundColor: evidences.includes('Ghost Orbs') ? 'rgb(43, 243, 43)' : NotThisEvidences.includes('Ghost Orbs') ? 'rgb(255, 67, 67)' : "#fff"
        }}
        onClick={() => addEvidence('Ghost Orbs')}>
        {evidences.includes('Ghost Orbs') ? <FaCheck className="check"/> : null}
        {NotThisEvidences.includes('Ghost Orbs') ? <RxCross2 className="check"/> : null}
       </div>
        <span>Ghost Orbs</span>
      </div>

      <div className="evidence">
        <div className="carre" 
        style={{
          backgroundColor: evidences.includes('Ultraviolet') ? 'rgb(43, 243, 43)' : NotThisEvidences.includes('Ultraviolet') ? 'rgb(255, 67, 67)' : "#fff"
        }}
          onClick={() => addEvidence('Ultraviolet')}>
          {evidences.includes('Ultraviolet') ? <FaCheck className="check"/> : null}
          {NotThisEvidences.includes('Ultraviolet') ? <RxCross2 className="check"/> : null}
        </div>
        <span>Ultraviolet</span>
      </div>

      <div className="evidence">
        <div className="carre" 
        style={{
          backgroundColor: evidences.includes('Dots') ? 'rgb(43, 243, 43)' : NotThisEvidences.includes('Dots') ? 'rgb(255, 67, 67)' : "#fff"
        }}
          onClick={() => addEvidence('Dots')}>
          {evidences.includes('Dots') ? <FaCheck className="check"/> : null}
          {NotThisEvidences.includes('Dots') ? <RxCross2 className="check"/> : null}
        </div>
        <span>Dots</span>
      </div>

    </div>

  </div>
  </>
}