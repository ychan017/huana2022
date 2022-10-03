import Head from "next/head"

const Meta = ({ keywords, description, title }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="stylesheet" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
}

Meta.defaultProps = {
  title: '彰化福興穀倉華國美學',
  keywords: '福興穀倉, 華國美學, 日本時代建築, 歷史建築, 彰化縣文化局, 鐵皮',
  description: '彰化文化局官方華国美学, 日本時代歷史建築鐵皮加好加満'
}

export default Meta
