import Head from 'next/head';
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css'; // optional for styling
import EmojiUnicode from '../components/datasources/emoji-unicode.js';

function BigSection(props) {
  const title = props.bighead.bighead
  const sections = props.bighead.sections
  return (
    <div className='big-section'>
      <h2>
        { title }
      </h2>
      {
        sections.map((section => <MediumSection section={section}/>))
      }
    </div>
  )
}

function MediumSection(props) {
  const title = props.section.mediumhead
  const contents = props.section.contents
  return (
    <span>
      <h4>
        { title }
      </h4>
      {
        contents.map((content) => <Emoji content={content}/>)
      }
    </span>
  )
}

function Emoji(props) {
  const unicode = '0x' + props.content.code.split('_')[0];
  const name = props.content.name; // Emoji name
  return (
    <button onClick={() => {
      navigator.clipboard.writeText(String.fromCodePoint(unicode));
    }} className='card'>
      <h3> { String.fromCodePoint(unicode) } </h3>
    </button>
  )
}

export default function Home() {
  if (typeof window !== 'undefined') {
    tippy(".card", {
      animation: 'fade',
      content: '복사되었습니다.',
      trigger: 'click',
      hideOnClick: false,
      onShow(instance) {
        setTimeout(() => {
          instance.hide();
        }, 1000);
      }
    });
  }

  const emojis = EmojiUnicode()

  return (
    <div className="container">
      <Head>
        <title>Emoji Cat 😽</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          이모지 고양이의 추천 이모지 목록
        </h1>

        <p className="description">
          클릭하면 복사가 돼요! 😽
        </p>

        <div className="grid">
          {
            emojis.map((bighead) => <BigSection bighead={bighead}/>)
          }
        </div>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
