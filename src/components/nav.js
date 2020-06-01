import Link from 'next/link';
import { withRouter } from 'next/router';
import {connect} from 'react-redux';
const Nav = ({router, Layout, handlePreviewClick}) =>{

  return(
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>
              <img className="logo" src={Layout.logo} alt="appgain-logo" />
            </a>
          </Link>
        </li>
        <li>
          {router.pathname === '/update-layout'?
            <button type="button" className="btn btn-primary" onClick={handlePreviewClick}>
              preview
            </button>
            :
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
const mapStateToProps = (state) =>({
    Layout: state.Layout
})
export default withRouter(connect(mapStateToProps,{})(Nav));
