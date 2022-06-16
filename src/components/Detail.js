import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import axios from "axios";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const url = "https://image.tmdb.org/t/p/w300";
  console.log(id);
  useEffect(() => {
    //grab movie info from db
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=89cbc4502b0f0e061ee215b4cd527d58`
      )
      .then((data) => {
        setMovie(data.data);
        console.log(data.data);
      });
  }, [id]);

  return (
    <Container>
      {movie && (
        <>
          <Background>
            <img src={`${url}/${movie.backdrop_path}`} alt={movie.title} />
          </Background>
          <ImageTitle>
            <img src={`${url}/${movie.poster_path}`} alt={movie.title} />
          </ImageTitle>
          <Controls>
            <PlayButton>
              <img src="/images/play-icon-black.png" alt="" />
              <span>PLAY</span>
            </PlayButton>
            <TrailerButton>
              <img src="/images/play-icon-white.png" alt="" />
              <span>TRAILER</span>
            </TrailerButton>
            <AddButton>
              <span>+</span>
            </AddButton>
            <GroupWatchButoon>
              <img src="/images/group-icon.png" alt="" />
            </GroupWatchButoon>
          </Controls>
          <SubTitle>{movie.original_title}</SubTitle>
          <Description>{movie.overview}</Description>
          <Rating>{movie.vote_average}</Rating>
          {/* <Genre>{movie.genres}</Genre> */}
        </>
      )}
    </Container>
  );
}

export default Detail;
const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw+5px);
  position: relative;
`;
const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.8;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const ImageTitle = styled.div`
  height: 30vh;
  width: 35vw;
  min-height: 170px;
  min-width: 200px;
  margin-top: 60px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
const Controls = styled.div`
  display: flex;
  align-items: center;
`;
const PlayButton = styled.button`
  padding: 0px 24px;
  margin-right: 22px;
  display: flex;
  align-items: center;
  height: 56px;
  background: rgb(249, 249, 249);
  border: none;
  letter-spacing: 1.8px;
  cursor: pointer;
  border-radius: 4px;
  font-size: 15px;

  &:hover {
    background: rgb(198, 198, 198);
  }
`;
const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
  text-transform: uppercase;
`;
const AddButton = styled.button`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  margin-right: 16px;

  span {
    font-size: 30px;
    color: white;
  }
`;
const GroupWatchButoon = styled(AddButton)`
  background: rgb(0, 0, 0);
`;
const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
`;
const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
  color: rgb(249, 249, 249);
  max-width: 500px;
`;
const Rating = styled.div``
const Genre=styled.div``
