import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button component', () => {
  test('renders button in disabled state', () => {
    const handleClick = jest.fn();
    const { getByRole } = render(
      <Button as="button" onClick={handleClick} disabled>
        Click me
      </Button>
    );

    const button = getByRole('button');
    expect(button).toBeDisabled();

    fireEvent.click(button);

    expect(handleClick).not.toHaveBeenCalled();
  });

  test('renders button in loading state', () => {
    const { getByRole, getByTestId } = render(
      <Button as="button" loading>
        Loading...
      </Button>
    );

    const button = getByRole('button');
    const loadingIcon = getByTestId('circle-loading-icon');

    expect(button).toContainElement(loadingIcon);
  });

  test('renders button with custom class name', () => {
    const { getByRole } = render(
      <Button as="button" className="custom-class">
        Click me
      </Button>
    );

    const button = getByRole('button');

    expect(button).toHaveClass('custom-class');
  });
});