import { UfNavbar } from '@/components/UfNavBar';

export default function Home() {
  return (
    <>
      <header className='container'>
        <UfNavbar />
      </header>
      <main className='container'>
        <h1>
          B24-5 Sensor Board,{' '}
          <small>
            By <a href='https://alybadawy.com'>Aly Badawy</a>
          </small>
        </h1>
      </main>
    </>
  );
}
