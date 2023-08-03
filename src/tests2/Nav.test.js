import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Nav from '../components/Nav';

describe('Nav Component', () => {
  test('renders the navigation link with correct text and URL', () => {
    render(
      <BrowserRouter>
        <Nav />
      </BrowserRouter>,
    );

    // Get the navigation link element
    const navLinkElement = screen.getByRole('link');

    // Assert that the navigation link has the correct text and URL
    expect(navLinkElement).toBeInTheDocument();
    expect(navLinkElement).toHaveTextContent('CryptoKing`s');

    // Ensure that the link points to the correct URL
    expect(navLinkElement).toHaveAttribute('href', '/');
  });

  test('renders the logo image', () => {
    render(
      <BrowserRouter>
        <Nav />
      </BrowserRouter>,
    );

    // Get the logo image element
    const logoImageElement = screen.getByAltText('crown');

    // Assert that the logo image is present
    expect(logoImageElement).toBeInTheDocument();
  });

  // Add more test cases as needed for other parts of the Nav component
});
