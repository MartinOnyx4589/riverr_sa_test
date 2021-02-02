import React, {useEffect, useState} from 'react';
import ContactForm from './components/ContactForm';
import imgMain from './images/coverImageBW.jpg'
import laptopImg from './images/laptop.jpg'
import indexpageCSS from './indexpage.css'
import homeCDD from './homepage.css'


function App() {
const loadContacts  = async () => {
  const res = await fetch('/api/getContacts');
  const contacts = await res.json();
  console.log(contacts);
}

useEffect(()=>{
  loadContacts();
},[])

  return (
    
<div className="App">
  
  <div className='container'>
  <head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    <meta charset="utf-8"></meta>
    <meta name="keywords" content="THETEST, WHATIS THIS&nbsp;ALLABOUT, QUALITY​, OUR MISSION, GIVE US ASHOUT"></meta>
    <title>Page 1</title>
    <link rel="stylesheet" href={indexpageCSS} media="screen"></link>
    <meta name="theme-color" content="#478ac9"></meta>
  </head>
  <body data-home-page="Page-1.html" data-home-page-title="Home" class="u-body"><header class="u-clearfix u-header u-header" id="sec-f075"><div class="u-clearfix u-sheet u-sheet-1">
      </div></header>
      
      <section class="u-align-center u-clearfix u-section-1" src="" id="sec-e8bc">
      <div class="u-clearfix u-sheet u-sheet-1">
        <img class="u-image u-image-1" src={imgMain} data-image-width="768" data-image-height="513"></img>
        <h1 class="u-text u-text-default u-title u-text-1">THE<br></br>TEST
        </h1>
        <p class="u-large-text u-text u-text-custom-color-1 u-text-default u-text-variant u-text-2">FORGE OUR</p>
        <p class="u-large-text u-text u-text-body-alt-color u-text-default u-text-variant u-text-3">TOMORROW</p>
      </div>
    </section>
    <section class="u-clearfix u-section-2" id="sec-e867">
      <div class="u-clearfix u-sheet u-sheet-1">
        <div class="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
          <div class="u-layout">
            <div class="u-layout-row">
              <div class="u-container-style u-layout-cell u-size-20 u-layout-cell-1">
                <div class="u-container-layout u-container-layout-1">
                  <h1 class="u-text u-text-default u-text-1">WHAT<br/>IS THIS&nbsp;<br/>ALL<br/>ABOUT
                  </h1>
                  <div class="u-custom-color-2 u-shape u-shape-rectangle u-shape-1"></div>
                </div>
              </div>
              <div class="u-container-style u-layout-cell u-size-20 u-layout-cell-2">
                <div class="u-container-layout u-container-layout-2">
                  <p class="u-text u-text-default u-text-2">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                </div>
              </div>
              <div class="u-container-style u-layout-cell u-size-20 u-layout-cell-3">
                <div class="u-container-layout u-container-layout-3">
                  <p class="u-text u-text-default u-text-3">"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit&nbsp;</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="u-align-center u-clearfix u-section-3" src="" id="sec-a7ec">
      <div class="u-clearfix u-sheet u-sheet-1">
      <img class="u-image u-image-1" src={laptopImg} data-image-width="950" data-image-height="534"></img>
      <h1 class="u-text u-text-default u-title u-text-1">
      <span class="u-text-body-alt-color">QUALITY</span>
      <span class="u-text-body-alt-color"></span></h1>
      <h1 class="u-text u-text-2">OUR MISSION</h1>
      <p class="u-large-text u-text u-text-default u-text-variant u-text-3">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."<br/>
      <br/>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"<br/>
        </p>
      </div>
    </section>
    <section class="u-align-center u-black u-clearfix u-section-4" id="sec-65e4">
    <div className="container py-5">
      <ContactForm refreshContact={loadContacts}/>
    </div>
    </section>
  </body>
  </div>
</div>



  );
}
export default App;
