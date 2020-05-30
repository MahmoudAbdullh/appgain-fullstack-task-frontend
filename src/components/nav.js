import Link from 'next/link';
import { withRouter } from 'next/router'
const Nav = ({router}) =>{

  return(
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>
              <img className="logo" src="https://res.cloudinary.com/appgain/image/upload/v1534373384/appgain/logo.png" alt="appgain-logo" />
            </a>
          </Link>
        </li>
        <li>
          {router.pathname === '/update-layout'?
            <Link href="/preview" >
              <a className="btn btn-primary">
                preview
              </a>
            </Link>:
            <Link href="/update-layout" >
              <a className="btn btn-primary">
                Update Layout
              </a>
            </Link>
          }

        </li>
      </ul>

      <style jsx>{`
        :global(body) {
          margin: 0;
          font-family: -apple-system,BlinkMacSystemFont,Avenir Next,Avenir,Helvetica,sans-serif;
        }
        nav {
          text-align: center;
          box-shadow: 1px 2px 5px #DDD;
          margin-bottom: 1em;
        }
        ul {
          display: flex;
          justify-content: space-between;
          margin: 0;
          padding: .5em 0;
        }
        nav > ul {
          padding: 4px 16px;
        }
        li {
          display: flex;
          padding: 6px 8px;
          align-items: center;
        }
        a {
          color: #fff;
          text-decoration: none;
          font-size: 14px;
        }
        .logo{
          width: 180px;
          height: 60px;
        }
      `}</style>
    </nav>
  );
}
export default withRouter(Nav);
