import React, { useEffect, useState } from 'react';
import { Card, Col, ListGroup, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Anime from './Anime';


function Singlepage() {
  const [singleview, setSingleview] = useState({});
  const { name } = useParams();

  useEffect(() => {
    const getData = async () => {
      const result = await fetch('/anime.json');
      const data = await result.json();
      const foundAnime = AnimeList.find(anime => anime.name === name);
      setSingleview(data.foundAnime);
      console.log(foundAnime);
    };

    getData();
  }, [name]);

  return (
    <Row className='ms-4 mt-5'>
      <Col lg={6}>
        <Card className="my-1 rounded">
          <a href={`/singleview/${singleview.name}`}>
            {Boolean(singleview?.img) && <Card.Img src={singleview.img} />}
          </a>
        </Card>
      </Col>
      <Col lg={6}>
        <ListGroup>
          <ListGroup.Item>{singleview.name}</ListGroup.Item>
          <ListGroup.Item>{singleview.description}</ListGroup.Item>
          <ListGroup.Item>{singleview.categorie}</ListGroup.Item>
          <ListGroup.Item>Episodes: {singleview.episode}</ListGroup.Item>
        </ListGroup>
      </Col>
    </Row>
  );
}

export default Singlepage;
