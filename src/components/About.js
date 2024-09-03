

export default function About(props) {

    let myStyle = {
      color:props.mode === "dark" ? "white" : "rgb(36 74 104)",
      backgroundColor: props.mode === "dark" ? "rgb(36 74 104)" : "white",
      border: "2px solid",
      borderColor: props.mode === "dark" ? "white" : "#042743"
    }

    
  return (
    <div className="container" style={{color:props.mode === "dark" ? "white" : "rgb(36 74 104)"}}>
        <h1 className ="my-3">About Us</h1>
       <div className="accordion" id="accordionExample" style={myStyle}>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong>Analyze your text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      Build vertically collapsing accordions in combination with our Collapse JavaScript plugin.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>Free to use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      Add .accordion-flush to remove the default background-color, some borders, and some rounded corners to render accordions edge-to-edge with their parent container.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <strong>Another Section</strong>  
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      Omit the data-bs-parent attribute on each .accordion-collapse to make accordion items stay open when another item is opened.
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
