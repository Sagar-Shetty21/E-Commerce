import App from "@components/App"

export const metadata = {
    title: "SVR Color Lab",
    description: "An Ecommerce website to order products of a local photo studio."
}

const Rootlayout = ({children}) => {
  return (
    <html lang='en'>
        <App>{children}</App>
    </html>
  )
}

export default Rootlayout