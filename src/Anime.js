import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './anime.css';


function Anime() {
     const [AnimeList, setAnime] = useState([])
     //api-function=getdata
     const getData = async () => {
          const result = await fetch('/anime.json')//await use cheythale const result enna variable store cheyu
          result.json().then(data => { setAnime(data.animelist) })
          //json=>js
     }
     console.log(AnimeList);

     useEffect(() => {
          //  console.log(getData);
          getData()
     }, [])

     return (

          <Row className=' mt-5 p-5'>
               {
                    AnimeList.map(anime => (
                         <Col lg={2} md={3}>
                              <Link id='link1' to={`/Singlepage/${anime.name}`}>
                              <Card id='card' className='ms-1 mt-5'>
                                   <Card.Img variant="top" src={anime.img} style={{ height: '300px' }} />
                                   <Card.Body>
                                        <Card.Title>{anime.name}</Card.Title>
                                        <Card.Text>{anime.categorie} <br />
                                             Rating: {anime.rating} <br />
                                        </Card.Text>
                                   </Card.Body>
                              </Card>
                              </Link>
                         </Col>
                    )
                    )
               }

          </Row>
     )
}
export default Anime