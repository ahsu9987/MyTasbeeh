import React, { useState } from "react";
import { Card, Button, Image, Col, Row, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import btncircle from '../Images/tasbeehbutton.png'
import backimg from '../Images/bgframe.jpg'
import Moon from '../Images/Moon.png'
import Offcanvas from 'react-bootstrap/Offcanvas';
import halfmoon from '../Images/halfmoon.png';
import Carousel from 'react-bootstrap/Carousel';
import Modal from 'react-bootstrap/Modal';
import { InputGroup, Form } from "react-bootstrap";
import Pencil from '../Images/pencil.png'




function myfunc() {
  document.getElementsByTagName("BODY")[0].style.backgroundColor = "#0247FE";
  document.getElementById("ramzan").style.color = "white";
  document.getElementById("ramzanbtn").style.color = "white";
  document.getElementById("zikrbtn").style.color = "white";
  document.getElementById("borderchange").style.borderColor = "#0247FE";
  document.getElementById("savebtn").style.borderColor = "#0247FE";
  document.getElementById("resetbtn").style.borderColor = "#0247FE";
  document.getElementById("countnum").style.borderColor = "#0247FE";

}
function myfunc1() {
  document.getElementsByTagName("BODY")[0].style.backgroundColor = "#9FA6B2";
  document.getElementById("ramzan").style.color = "black";
  document.getElementById("ramzanbtn").style.color = "black";
  document.getElementById("zikrbtn").style.color = "black";
  document.getElementById("borderchange").style.borderColor = "#9FA6B2";
  document.getElementById("savebtn").style.borderColor = "#9FA6B2";
  document.getElementById("resetbtn").style.borderColor = "#9FA6B2";
  document.getElementById("countnum").style.borderColor = "#9FA6B2";


}
function myfunc2() {
  document.getElementsByTagName("BODY")[0].style.backgroundColor = "#14A44D";
  document.getElementById("ramzan").style.color = "yellow";
  document.getElementById("ramzanbtn").style.color = "yellow";
  document.getElementById("zikrbtn").style.color = "yellow";
  document.getElementById("borderchange").style.borderColor = "#14A44D";
  document.getElementById("savebtn").style.borderColor = "#14A44D";
  document.getElementById("resetbtn").style.borderColor = "#14A44D";
  document.getElementById("countnum").style.borderColor = "#14A44D";


}
function myfunc3() {
  document.getElementsByTagName("BODY")[0].style.backgroundColor = "#E4A11B";
  document.getElementById("ramzan").style.color = "darkgreen";
  document.getElementById("ramzanbtn").style.color = "darkgreen";
  document.getElementById("zikrbtn").style.color = "darkgreen";
  document.getElementById("borderchange").style.borderColor = "#E4A11B";
  document.getElementById("savebtn").style.borderColor = "#E4A11B";
  document.getElementById("resetbtn").style.borderColor = "#E4A11B";
  document.getElementById("countnum").style.borderColor = "#E4A11B";


}
function myfunc4() {
  document.getElementsByTagName("BODY")[0].style.backgroundColor = "#DC4C64";
  document.getElementById("ramzan").style.color = "black";
  document.getElementById("ramzanbtn").style.color = "black";
  document.getElementById("zikrbtn").style.color = "black";
  document.getElementById("borderchange").style.borderColor = "#DC4C64";
  document.getElementById("savebtn").style.borderColor = "#DC4C64";
  document.getElementById("resetbtn").style.borderColor = "#DC4C64";
  document.getElementById("countnum").style.borderColor = "#DC4C64";

}
function myfunc5() {
  document.getElementsByTagName("BODY")[0].style.backgroundColor = "#FBFBFB";
  document.getElementById("ramzan").style.color = "black";
  document.getElementById("ramzanbtn").style.color = "black";
  document.getElementById("zikrbtn").style.color = "black";
  document.getElementById("borderchange").style.borderColor = "#FBFBFB";
  document.getElementById("savebtn").style.borderColor = "#FBFBFB";
  document.getElementById("resetbtn").style.borderColor = "#FBFBFB";
  document.getElementById("countnum").style.borderColor = "#FBFBFB";


}
function myfunc6() {
  document.getElementsByTagName("BODY")[0].style.backgroundColor = "#332D2D";
  document.getElementById("ramzan").style.color = "white";
  document.getElementById("ramzanbtn").style.color = "white";
  document.getElementById("zikrbtn").style.color = "white";
  document.getElementById("borderchange").style.borderColor = "black";
  document.getElementById("savebtn").style.borderColor = "black";
  document.getElementById("resetbtn").style.borderColor = "black";
  document.getElementById("countnum").style.borderColor = "black";
}


//popup open..//

function MyVerticallyCenteredModal(props) {

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered className="popup-open" backdrop="static"
      >
        <Modal.Header closeButton className="bg-dark text-light ">
          Ramzan Mubarak
        </Modal.Header>
        <Modal.Body className="bg-dark">
          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              Zikr-name
            </InputGroup.Text>
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>
          <InputGroup>
            <InputGroup.Text>Description</InputGroup.Text>
            <Form.Control as="textarea" style={{ height: '100px' }} aria-label="With textarea" />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer className="bg-dark">
          <Button variant="outline-success">Save</Button>
        </Modal.Footer>
      </Modal>

    </>

  );
}



function Home() {
  const [count, setCount] = useState(0);   //set count tasbeeh..//


  const [show, setShow] = useState(false);      //set ramzan timetable..//
  const [showii, setShowii] = useState(false);  //set zikr list..//


  const handleClose = () => setShow(false);    //set  ramzan timetable close..//
  const handleShow = () => setShow(true);      

  const handleCloseii = () => setShowii(false);  //set  zikr list close..//
  const handleShowii = () => setShowii(true);   


  const [modalShow, setModalShow] = React.useState(false);   //Save button popup.//

  const [modalShowi, SetModalShow] = React.useState(false);   //..//




  return (
    <>
      <h1 className="text-center " id="ramzan" style={{ fontFamily: "Anta" }}>Ramzan Mubarak <Image src={Moon} style={{ height: '70px' }}></Image></h1>
      <div className="d-flex  btncontainer">
        <Button variant="outline-success ramzanbtn " id="ramzanbtn" onClick={handleShow} >Ramzan Time-Table</Button>{' '}
        <Offcanvas className=' text-light outline-primary backimg ' style={{ borderTopRightRadius: "40px", borderBottomRightRadius: "40px", border:'4px groove black' }} show={show} onHide={handleClose} backdrop="static" placement="start">
          <Offcanvas.Header closeButton className="">
            <Offcanvas.Title className="fs-4 text-black">Ramzan Time-Table<Image src={halfmoon} style={{ height: '50px' }}></Image>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <h4 className="mb-5" style={{ textAlign: 'center', color: 'gold' }}>بسم الله الرحمن الرحيم</h4>
          <p className="text-black text-center bg-warning  rounded-pill "><span className="fw-bold">Sehri ki Dua </span><br></br>
            وَبِصَوْمِ غَدٍ نَّوَيْتُ مِنْ شَهْرِ رَمَضَانَ
          </p>
          <p className="text-black text-center bg-warning rounded-pill "><span className="fw-bold">Iftar ki Dua</span><br></br>
            اللَّهُمَّ اِنِّى لَكَ صُمْتُ وَبِكَ امنْتُ [وَعَلَيْكَ تَوَكَّلْتُ] وَعَلَى رِزْقِكَ اَفْطَرْتُ
          </p>

          <Carousel slide={false} className="bg-dark p-4">
            <Carousel.Item className="bg-dark">
              <p className="text-center">First Ashra</p>
              <Container className="bg-dark p-3 " style={{ width: '350px', height: '270px' }}>
                <Row className=" gap-1 fw-bold  mb-1 ">
                  <Col className="bg-warning text-black">Date</Col>
                  <Col className="bg-warning text-black">Day</Col>
                  <Col className="bg-warning text-black">Sehri</Col>
                  <Col className="bg-warning text-black">Iftari</Col>
                </Row>
                <Row className=" gap-1 text-black fw-bold mb-1 " style={{ fontSize: '12px' }}>
                  <Col className="bg-warning">12 MAR</Col>
                  <Col className="bg-warning">01 TUE</Col>
                  <Col className="bg-warning ">05:26 AM</Col>
                  <Col className="bg-warning">06:50 PM</Col>
                </Row>
                <Row className=" gap-1 text-black fw-bold mb-1 " style={{ fontSize: '12px' }}>
                  <Col className="bg-warning">13 MAR</Col>
                  <Col className="bg-warning">02 WED</Col>
                  <Col className="bg-warning ">05:25 AM</Col>
                  <Col className="bg-warning">06:50 PM</Col>
                </Row>
                <Row className=" gap-1 text-black fw-bold mb-1 " style={{ fontSize: '12px' }}>
                  <Col className="bg-warning">14 MAR</Col>
                  <Col className="bg-warning">03 THU</Col>
                  <Col className="bg-warning ">05:24 AM</Col>
                  <Col className="bg-warning">06:50 PM</Col>
                </Row>
                <Row className=" gap-1 text-black fw-bold mb-1 " style={{ fontSize: '12px' }}>
                  <Col className="bg-warning">15 MAR</Col>
                  <Col className="bg-warning">04 FRI</Col>
                  <Col className="bg-warning ">05:24 AM</Col>
                  <Col className="bg-warning">06:50 PM</Col>
                </Row>
                <Row className=" gap-1 text-black fw-bold mb-1 " style={{ fontSize: '12px' }}>
                  <Col className="bg-warning">16 MAR</Col>
                  <Col className="bg-warning">05 SAT</Col>
                  <Col className="bg-warning ">05:23 AM</Col>
                  <Col className="bg-warning">06:51 PM</Col>
                </Row>
                <Row className=" gap-1 text-black fw-bold mb-1 " style={{ fontSize: '12px' }}>
                  <Col className="bg-warning">17 MAR</Col>
                  <Col className="bg-warning">06 SUN</Col>
                  <Col className="bg-warning ">05:22 AM</Col>
                  <Col className="bg-warning">06:51 PM</Col>
                </Row>
                <Row className=" gap-1 text-black fw-bold mb-1 " style={{ fontSize: '12px' }}>
                  <Col className="bg-warning">18 MAR</Col>
                  <Col className="bg-warning">07 MON</Col>
                  <Col className="bg-warning ">05:21 AM</Col>
                  <Col className="bg-warning">06:51 PM</Col>
                </Row>
                <Row className=" gap-1 text-black fw-bold mb-1 " style={{ fontSize: '12px' }}>
                  <Col className="bg-warning">19 MAR</Col>
                  <Col className="bg-warning">08 TUE</Col>
                  <Col className="bg-warning ">05:20 AM</Col>
                  <Col className="bg-warning">06:51 PM</Col>
                </Row>
                <Row className=" gap-1 text-black fw-bold mb-1 " style={{ fontSize: '12px' }}>
                  <Col className="bg-warning">20 MAR</Col>
                  <Col className="bg-warning">09 WED</Col>
                  <Col className="bg-warning ">05:19 AM</Col>
                  <Col className="bg-warning">06:52 PM</Col>
                </Row>
                <Row className=" gap-1 text-black fw-bold mb-1 " style={{ fontSize: '12px' }}>
                  <Col className="bg-warning">21 MAR</Col>
                  <Col className="bg-warning">10 THU</Col>
                  <Col className="bg-warning ">05:19 AM</Col>
                  <Col className="bg-warning">06:52 PM</Col>
                </Row>
              </Container>

            </Carousel.Item>

            <Carousel.Item>
              <p className="text-center">Second Ashra</p>
              <Container className="bg-dark p-3 " style={{ width: '350px', height: '270px' }}>
                <Row className=" gap-1 fw-bold  mb-1 ">
                  <Col className="bg-warning text-black">Date</Col>
                  <Col className="bg-warning text-black">Day</Col>
                  <Col className="bg-warning text-black">Sehri</Col>
                  <Col className="bg-warning text-black">Iftari</Col>
                </Row>
                <Row className=" gap-1 text-black fw-bold mb-1 " style={{ fontSize: '12px' }}>
                  <Col className="bg-warning">22 MAR</Col>
                  <Col className="bg-warning">11 FRI</Col>
                  <Col className="bg-warning ">05:26 AM</Col>
                  <Col className="bg-warning">06:50 PM</Col>
                </Row>
                <Row className=" gap-1 text-black fw-bold mb-1 " style={{ fontSize: '12px' }}>
                  <Col className="bg-warning">23 MAR</Col>
                  <Col className="bg-warning">12 SAT</Col>
                  <Col className="bg-warning ">05:25 AM</Col>
                  <Col className="bg-warning">06:50 PM</Col>
                </Row>
                <Row className=" gap-1 text-black fw-bold mb-1 " style={{ fontSize: '12px' }}>
                  <Col className="bg-warning">24 MAR</Col>
                  <Col className="bg-warning">13 SUN</Col>
                  <Col className="bg-warning ">05:24 AM</Col>
                  <Col className="bg-warning">06:50 PM</Col>
                </Row>
                <Row className=" gap-1 text-black fw-bold mb-1 " style={{ fontSize: '12px' }}>
                  <Col className="bg-warning">25 MAR</Col>
                  <Col className="bg-warning">14 MON</Col>
                  <Col className="bg-warning ">05:24 AM</Col>
                  <Col className="bg-warning">06:50 PM</Col>
                </Row>
                <Row className=" gap-1 text-black fw-bold mb-1 " style={{ fontSize: '12px' }}>
                  <Col className="bg-warning">26 MAR</Col>
                  <Col className="bg-warning">15 TUE</Col>
                  <Col className="bg-warning ">05:23 AM</Col>
                  <Col className="bg-warning">06:51 PM</Col>
                </Row>
                <Row className=" gap-1 text-black fw-bold mb-1 " style={{ fontSize: '12px' }}>
                  <Col className="bg-warning">27 MAR</Col>
                  <Col className="bg-warning">16 WED</Col>
                  <Col className="bg-warning ">05:22 AM</Col>
                  <Col className="bg-warning">06:51 PM</Col>
                </Row>
                <Row className=" gap-1 text-black fw-bold mb-1 " style={{ fontSize: '12px' }}>
                  <Col className="bg-warning">28 MAR</Col>
                  <Col className="bg-warning">17 THU</Col>
                  <Col className="bg-warning ">05:21 AM</Col>
                  <Col className="bg-warning">06:51 PM</Col>
                </Row>
                <Row className=" gap-1 text-black fw-bold mb-1 " style={{ fontSize: '12px' }}>
                  <Col className="bg-warning">29 MAR</Col>
                  <Col className="bg-warning">18 FRI</Col>
                  <Col className="bg-warning ">05:20 AM</Col>
                  <Col className="bg-warning">06:51 PM</Col>
                </Row>
                <Row className=" gap-1 text-black fw-bold mb-1 " style={{ fontSize: '12px' }}>
                  <Col className="bg-warning">30 MAR</Col>
                  <Col className="bg-warning">19 SAT</Col>
                  <Col className="bg-warning ">05:19 AM</Col>
                  <Col className="bg-warning">06:52 PM</Col>
                </Row>
                <Row className=" gap-1 text-black fw-bold mb-1 " style={{ fontSize: '12px' }}>
                  <Col className="bg-warning">31 MAR</Col>
                  <Col className="bg-warning">20 SUN</Col>
                  <Col className="bg-warning ">05:19 AM</Col>
                  <Col className="bg-warning">06:52 PM</Col>
                </Row>
              </Container>

            </Carousel.Item>
            <Carousel.Item>
              <p className="text-center">Third Ashra</p>
              <Container className="bg-dark p-3 " style={{ width: '350px', height: '270px' }}>
                <Row className=" gap-1 fw-bold  mb-1 ">
                  <Col className="bg-warning text-black">Date</Col>
                  <Col className="bg-warning text-black">Day</Col>
                  <Col className="bg-warning text-black">Sehri</Col>
                  <Col className="bg-warning text-black">Iftari</Col>
                </Row>
                <Row className=" gap-1 text-black fw-bold mb-1 " style={{ fontSize: '12px' }}>
                  <Col className="bg-warning">01 APR</Col>
                  <Col className="bg-warning">21 MON</Col>
                  <Col className="bg-warning ">05:26 AM</Col>
                  <Col className="bg-warning">06:50 PM</Col>
                </Row>
                <Row className=" gap-1 text-black fw-bold mb-1 " style={{ fontSize: '12px' }}>
                  <Col className="bg-warning">02 APR</Col>
                  <Col className="bg-warning">22 TUE</Col>
                  <Col className="bg-warning ">05:25 AM</Col>
                  <Col className="bg-warning">06:50 PM</Col>
                </Row>
                <Row className=" gap-1 text-black fw-bold mb-1 " style={{ fontSize: '12px' }}>
                  <Col className="bg-warning">03 APR</Col>
                  <Col className="bg-warning">23 WED</Col>
                  <Col className="bg-warning ">05:24 AM</Col>
                  <Col className="bg-warning">06:50 PM</Col>
                </Row>
                <Row className=" gap-1 text-black fw-bold mb-1 " style={{ fontSize: '12px' }}>
                  <Col className="bg-warning">04 APR</Col>
                  <Col className="bg-warning">24 THU</Col>
                  <Col className="bg-warning ">05:24 AM</Col>
                  <Col className="bg-warning">06:50 PM</Col>
                </Row>
                <Row className=" gap-1 text-black fw-bold mb-1 " style={{ fontSize: '12px' }}>
                  <Col className="bg-warning">05 APR</Col>
                  <Col className="bg-warning">25 FRI</Col>
                  <Col className="bg-warning ">05:23 AM</Col>
                  <Col className="bg-warning">06:51 PM</Col>
                </Row>
                <Row className=" gap-1 text-black fw-bold mb-1 " style={{ fontSize: '12px' }}>
                  <Col className="bg-warning">06 APR</Col>
                  <Col className="bg-warning">26 SAT</Col>
                  <Col className="bg-warning ">05:22 AM</Col>
                  <Col className="bg-warning">06:51 PM</Col>
                </Row>
                <Row className=" gap-1 text-black fw-bold mb-1 " style={{ fontSize: '12px' }}>
                  <Col className="bg-warning">07 APR</Col>
                  <Col className="bg-warning">27 SUN</Col>
                  <Col className="bg-warning ">05:21 AM</Col>
                  <Col className="bg-warning">06:51 PM</Col>
                </Row>
                <Row className=" gap-1 text-black fw-bold mb-1 " style={{ fontSize: '12px' }}>
                  <Col className="bg-warning">08 APR</Col>
                  <Col className="bg-warning">28 MON</Col>
                  <Col className="bg-warning ">05:20 AM</Col>
                  <Col className="bg-warning">06:51 PM</Col>
                </Row>
                <Row className=" gap-1 text-black fw-bold mb-1 " style={{ fontSize: '12px' }}>
                  <Col className="bg-warning">09 APR</Col>
                  <Col className="bg-warning">29 TUE</Col>
                  <Col className="bg-warning ">05:19 AM</Col>
                  <Col className="bg-warning">06:52 PM</Col>
                </Row>
                <Row className=" gap-1 text-black fw-bold mb-1 " style={{ fontSize: '12px' }}>
                  <Col className="bg-warning">10 APR</Col>
                  <Col className="bg-warning">30 WED</Col>
                  <Col className="bg-warning ">05:19 AM</Col>
                  <Col className="bg-warning">06:52 PM</Col>
                </Row>
              </Container>
            </Carousel.Item>
          </Carousel>



        </Offcanvas>

        <Button variant="outline-success displaybtn " id="zikrbtn" onClick={handleShowii} >Zikr-List</Button>{' '}
        <Offcanvas show={showii} onHide={handleCloseii} placement="bottom" className="bg-dark" backdrop="static" style={{ margin: '30px', borderRadius: '20px', border: '2px solid black' }}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title ><h1 className="text-light">Zikr-List</h1></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="m-3  d-flex" style={{ border: '1px solid gray', borderRadius: '20px', backgroundColor: 'lightgray' }}>
            <h5 >Zikr-name:-</h5>
            <span className="allbtn ">
              <Button variant="outline-danger" className="rounded-pill" onClick={() => SetModalShow(true)}>Delete</Button>{' '}
              <Button variant="outline-primary" className="rounded-pill">Continue</Button>{' '}
              <Button variant="outline-secondary"><Image src={Pencil}></Image></Button>{' '}
            </span>
          </Offcanvas.Body>
        </Offcanvas>




      </div>
      <div id="sizechange">
        <div className="container">
          <Image src={backimg} className="container"  />
          <Card className="bgcolo" id="borderchange">
            <Card.Body>
              <Card.Title id="countnum">{count}</Card.Title>
              <div className="d-flex">
                <Button variant="primary text-light mt-2" id="savebtn" style={{ width: '4rem', height: '4rem', borderRadius: '40px', marginLeft: '4px', fontSize: '10px', fontWeight: 'bold', border: '3px solid #da9100' }} onClick={() => setModalShow(true)} disabled={count === 0}>Save</Button>

                <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
                <Button variant="secondary  mt-2" id="resetbtn" style={{ width: '4rem', height: '4rem', borderRadius: '40px', marginLeft: '80px', fontSize: '10px', color: 'black', fontWeight: 'bold', border: '3px solid #da9100' }} onClick={() => setCount(0)} disabled={count === 0}>Reset</Button><br></br>
              </div>
              <Button variant="" className="btnfirst" style={{ height: '7rem', marginLeft: '29px', border: 'none' }} onClick={() => setCount(count + 1)} ><Image src={btncircle} roundedCircle className="btncircl" /></Button>
              <div className="container1 ">
                <Button variant="outline-primary " className="colors clr1 " onClick={myfunc}></Button>{' '}
                <Button variant="outline-secondary " className="colors clr2" onClick={myfunc1}></Button>{' '}
                <Button variant="outline-success" className="colors clr3" onClick={myfunc2}></Button>{' '}
                <Button variant="outline-warning" className="colors clr4" onClick={myfunc3}></Button>{' '}
                <Button variant="outline-danger" className="colors clr5" onClick={myfunc4}></Button>{' '}
                <Button variant="outline-light" className="colors clr6" onClick={myfunc5}></Button>{' '}
                <Button variant="outline-dark" className="colors clr7" onClick={myfunc6}></Button>
              </div>
              <h6 className="text-center text-light mt-2 changetheme">Change background color</h6>
            </Card.Body>
          </Card>
        </div>
      </div>

    </>

  )
}

export default Home;