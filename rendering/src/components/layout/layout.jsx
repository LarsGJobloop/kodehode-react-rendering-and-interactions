import style from './layout.module.css'

export function Layout({children}) {
  return (
    <div className={style['layout']}>
      <header className={style['navbar']}>
        <h1 className='text-center'>React Rendering Patterns</h1>
      </header>

      <main>
        {children}
      </main>

      <footer className={style['footer'] + ' text-center'}>
        <p>Kodehodet 2024</p>
        <a href="https://jobloop.no" referrerPolicy='no-referrer'>Jobloop</a>
      </footer>
    </div>
  )
}
