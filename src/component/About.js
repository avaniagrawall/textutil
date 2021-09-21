import React from 'react'


export default function About(props) {
    let myStyle={
    color:props.mode==='dark'?'blue':'black',
    backgroundColor:props.mode==='dark'?'#b6bfcd':'white',
    border:'2 px solid black'
    }
    // const [btntext,setbtnmode]=useState("Enable Dark Mode");
    // const toggleButton=()=>{
    //  if(myStyle.color==='white'){
    //   setStyle({
    //       color:'black',
    //       backgroundColor:'white'
    //   }

    //   )
    //   setbtnmode('Enable Dark Mode');
    //  }else{
    //     setStyle({
    //         color:'white',
    //         backgroundColor:'black'
    //     }
  
    //     ) 
    //     setbtnmode('Enable Light Mode');
    //  }
    // }
    return (

    <>
            <div className="container" style={myStyle}>
            <h1 style={{margin:'2px',padding:'10px'}}>About Us</h1>
                    <div className="accordion" id="accordionExample">
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button"style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>Analyse your text</strong>
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body"style={myStyle}>
                Text Utils give you to analyse text quickly and efficiently.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" style={myStyle}type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>Free to use</strong>
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body"style={myStyle}>
                TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" style={myStyle}type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>Browser Compatibilty</strong>
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
            This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc. 
            </div>
            </div>
        </div>
        {/* <button type="button" class="btn btn-primary my-3" onClick={toggleButton}>{btntext}</button> */}
        </div>
        </div>
        </>
    )
}
