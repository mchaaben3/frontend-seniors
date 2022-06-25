import styled from 'styled-components';

export const Story = styled.div`
  padding: 1rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  width: 5rem;
  background-color: black;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  background: url(${(props) => props.bg}) no-repeat center/cover;
  &:before {
    content: '';
    display: block;
    width: 10rem;
    height: 5rem;
    background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.5));
    position: absolute;
    bottom: 0;
  }
  .name {
    z-index: 2;
  }
  .profile-picture {
    width: 2.7rem;
    height: 2.7rem;
    align-self: center;
    border: 4px solid rgb(99 102 241);
  }
`;

export const CreateStory = styled.div`
  border-radius: 1rem;
  border: 2px solid rgb(0 0 0);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  color: #fff;
  font-size: 0.8rem;
  font-weight: bold;
  width: 5rem;
  background-color: black;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  background: url(${(props) => props.bg}) no-repeat center/cover;
  margin-right: 2rem;
`;
