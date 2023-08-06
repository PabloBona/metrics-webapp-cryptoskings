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

    const navLinkElement = screen.getByRole('link');

    expect(navLinkElement).toBeInTheDocument();
    expect(navLinkElement).toHaveTextContent('CryptoKing`s');

    expect(navLinkElement).toHaveAttribute('href', '/');
  });

  test('renders the logo image', () => {
    render(
      <BrowserRouter>
        <Nav />
      </BrowserRouter>,
    );

    const logoImageElement = screen.getByAltText('crown');

    expect(logoImageElement).toBeInTheDocument();
  });
});
