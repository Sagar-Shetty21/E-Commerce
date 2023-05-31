import '@styles/global.css';

export const metadata = {
    title: "SVR Color Lab",
    description: "An Ecommerce website to order products of a local photo studio."
}

const Rootlayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            <div className="main">
                <div className="gradient"/>
            </div>

            <main className="app">
                {children}
            </main>
        </body>
    </html>
  )
}

export default Rootlayout