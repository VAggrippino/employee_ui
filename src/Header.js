import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

export default function Header(props) {
  const [searchVisible, setSearchVisible] = useState(false);

  useEffect(() => {
    const handler = () => setSearchVisible(false);
    window.addEventListener(`click`, handler);

    return () => {
      window.removeEventListener(`click`, handler);
    }
  }, []);

  const searchHandler = (event) => {
    event.stopPropagation();
    const searchInput = document.querySelector(`.search__input`);
    const query = searchInput.value;

    if (event.type === `keydown` && event.key !== `Enter`) return;

    if (!searchVisible) {
      setSearchVisible(true);
      searchInput.focus();
    } else if (event.type !== `keydown` && query.trim().length === 0) {
      searchInput.blur();
      setSearchVisible(false);
    } else {
      props.searchHandler(searchInput.value);
    }
  }

  return (
    <>
      <header className="header">
        <div className="header__hamburger">
          <FontAwesomeIcon icon={solid('bars')} />
        </div>
        <nav className="header__nav">
          <ul>
            <li><a href="www.example.com" onClick={(event) => event.preventDefault()}>Home</a></li>
            <li><a href="www.example.com" onClick={(event) => event.preventDefault()}>Info</a></li>
          </ul>
        </nav>
        <div className="header__actions">
          <div className={`search ${searchVisible ? `visible` : ``}`}>
            <input type="text" className="search__input"
              onClick={event => event.stopPropagation()}
              onKeyDown={searchHandler}
            />
            <button type="button" className="search__button" onClick={searchHandler}>
              <span className="sr-only">Search</span>
              <FontAwesomeIcon icon={solid('magnifying-glass')} />
            </button>
          </div>
          <button type="button">
            <span className="sr-only">Chat</span>
            <FontAwesomeIcon icon={solid('comments')} />
          </button>
          <button type="button">
            <span className="sr-only">Notifications</span>
            <FontAwesomeIcon icon={solid('bell')} />
          </button>
          <button type="button">
            <span className="sr-only">Settings</span>
            <FontAwesomeIcon icon={solid('gear')} />
          </button>
        </div>
      </header>
      <section className="pageHeader">
          <h1 className="pageHeader__title">Employees</h1>
          <p className="pageHeader__path"><span>Home</span> / <span>Employees</span></p>
      </section>
    </>
  );
}