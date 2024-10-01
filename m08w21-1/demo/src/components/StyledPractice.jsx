import styled from 'styled-components';
import Custom from './Custom';

const StyledPractice = () => {
  const H2 = styled.h2`
    color: magenta;
    text-decoration: underline;
  `;

  const MyParagraph = styled.p`
    font-size: 2rem;
    color: ${(props) => props.color ? props.color : 'orange'};
    text-decoration: ${(props) => props.underline ? 'underline' : 'none'}
  `;

  const Wrapped = styled(Custom)`
    background-color: blue;
    color: yellow;
  `

  return (
    <div>
      <h2>Styled Practice!</h2>
      {/* <H2>How do I look?</H2>
      <H2>Even more good stuff</H2>
      <MyParagraph underline>Without a color argument</MyParagraph>
      <MyParagraph color="green" >Inside some paragraph</MyParagraph> */}
      <Custom />
      <Wrapped />
    </div>
  );
};

export default StyledPractice;