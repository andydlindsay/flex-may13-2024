import React from 'react';
import ReactDOM from 'react-dom'; 
import App from '../App';
import { render, prettyDOM, fireEvent } from '@testing-library/react';

test('can toggle the isCheating boolean by clicking on the robot head icon', () => {
  const { container, debug, getByTestId } = render(<App />);
  // console.log(prettyDOM(container));
  // debug();

  const robotHeadIcon = getByTestId('robot-head-icon');

  fireEvent.click(robotHeadIcon); // update state and cause a re-render

  expect(robotHeadIcon).toHaveClass('cheating');

  fireEvent.click(robotHeadIcon);

  expect(robotHeadIcon).not.toHaveClass('cheating');
});


it('renders without crashing', () => { 
  const div = document.createElement('div'); 
  ReactDOM.render(<App />, div); 
  ReactDOM.unmountComponentAtNode(div); 
});


