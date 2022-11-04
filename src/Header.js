import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';


export default function Header() {
  return (
    <>
      <header className="header">
        <div className="header__hamburger">
          <FontAwesomeIcon icon={solid('bars')} />
        </div>
        <nav className="header__nav">
          <ul>
            <li><a href="www.example.com">Home</a></li>
            <li><a href="www.example.com">Info</a></li>
          </ul>
        </nav>
        <div className="header__actions">
          <ul>
            <li>
              <a href="www.example.com">
                <span className="sr-only">Search</span>
                <FontAwesomeIcon icon={solid('magnifying-glass')} />
              </a>
            </li>
            <li>
              <a href="www.example.com">
                <span className="sr-only">Chat</span>
                <FontAwesomeIcon icon={solid('comments')} />
              </a></li>
            <li>
              <a href="www.example.com">
                <span className="sr-only">Notifications</span>
                <FontAwesomeIcon icon={solid('bell')} />
              </a></li>
            <li>
              <a href="www.example.com">
                <span className="sr-only">Settings</span>
                <FontAwesomeIcon icon={solid('gear')} />
              </a></li>
          </ul>
        </div>
      </header>
      <section className="pageHeader">
          <h1 className="pageHeader__title">Employees</h1>
          <p className="pageHeader__path"><span>Home</span> / <span>Employees</span></p>
      </section>
    </>
  );
}