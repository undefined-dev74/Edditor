import styled from 'styled-components';

export const Section = styled.section`
  display: grid;
  grid-template-columns: 20% 60% 20%;
  grid-column-gap: 10px;
  width: 100%;
`;

export const TimelinePanel = styled.div`
  grid-column: 2 / 3;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 0;
  justify-content: space-between;
`;

export const Heading = styled.div`
  margin-left: 50px;
  font-family: 'Monserrat', sans-serif;

  h1 > span > i {
    margin-left: 5px;
  }
`;
export const Userpanel = styled.div`
  width: 50%;

  ul.timeline_nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-left: 30px;

    li.timeline_nav-icons {
      margin-left: 8px;

      i {
        color: #c8c6c6;
      }
    }
  }
`;
