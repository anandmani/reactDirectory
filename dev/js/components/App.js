import React from 'react';
import Register from './Register';
import {Grid, Row, Col} from 'react-bootstrap';

// function Dummy(...p){    //doesnt have to be props, using p instead
//   console.log(p); //Array[3] of 3 objects, where first object = Object {id: "dummy", onClick: "haha"}.  Here, p has the same value as arguments.   p == arguments
//   return(
//     <div>
//       Watafakaka
//     </div>
//   );
// }

//
// function Dummy(p){
//   console.log(p);  //Object {id: "dummy", onClick: "haha"}
//   return(
//     <div>
//       Makakak
//     </div>
//   );
// }



const App = () => (
  <Grid>
    <Row>
      <Col xs={8} xsOffset={2}>
        <Register/>
      </Col>
    </Row>
  </Grid>
);

export default App;
