import styled from 'styled-components';
import landing from '../../img/bg-01.jpg';
import bg from '../../img/illustration.png';
import bgC from '../../img/landing.jpg';
export const Container = styled.div.attrs({
  className: 'bg-white dark:bg-gray-800',
})``;
export const BgContainer = styled.div`
  background-image: url(${bgC});
  background-size: cover;
  background-position: center;
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;
export const MainC = styled.div.attrs({
  className: 'flex justify-center h-screen',
})``;

export const FormTitle = styled.span`
  width: 100%;

  font-family: 'Montserrat Alternates', sans-serif;
  font-size: 2.5rem;
  color: #000;
  line-height: 2;
  text-align: center;
  margin-bottom: 30px;
`;

export const Form = styled.form`
  width: 360px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 73px 55px 55px 55px;
`;

export const Input = styled.input.attrs({
  className:
    'block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40',
})``;

export const Button = styled.button.attrs({
  className:
    ' w-1/3 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50',
})``;
export const H1 = styled.h1`
  color: #7e7e7e;
  font: bold 25px Helvetica, Arial, sans-serif;
  letter-spacing: -0.05em;
  line-height: 20px;
  margin: 10px 0 30px;
  text-align: center;
`;
export const Illustration = styled.div`
  width: 723px;
  height: 555px;
  background: url(${bg}) center center;
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 0;
  right: 0;
`;

export const InputForm = ({ type, placeholder }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full text-lg p-2 mb-2 text-gray-900 border border-gray-900 focus:outline-none focus:border-indigo-500"
    />
  );
};

export const LeftSide = () => {
  return (
    <div className="flex items-center h-full px-40 bg-gray-900 bg-opacity-50">
      <div>
        <h2 className="text-4xl font-bold text-white">SENIORS APP</h2>

        <p className="max-w-xl mt-3 text-gray-300">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. In autem
          ipsa, nulla laboriosam dolores, repellendus perferendis libero
          suscipit nam temporibus molestiae
        </p>
      </div>
    </div>
  );
};
