export default function FirstPost() {
    return <h1>First Post</h1>;
  }

  import Link from 'next/link';

  import Head from 'next/head';
export default function FirstPost() {
  return (
    <>

<Head>
  <title>Create Next App</title>
  <link rel="icon" href="/favicon.ico" />
</Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  );
}export default function FirstPost() {
    return (
      <>
        <Head>
          <title>First Post</title>
        </Head>
        <h1>First Post</h1>
        <h2>
          <Link href="/">← Back to home</Link>
        </h2>
      </>
    );
  }