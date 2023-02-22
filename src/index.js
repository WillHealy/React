import ReactDOM from "react-dom"
import Header from "./components/Header.js"
import HeaderTwo from "./components/HeaderTwo.js"
import Nav from "./components/Nav.js" 
import Paragraph from "./components/Paragraph.js"
import Image from "./components/Image.js"
import Footer from "./components/Footer.js"

const HomeComponent = () => {
    return (
        <main>
            <Header />
            <Nav />
            <HeaderTwo />
            <Paragraph />
            <Image />
            <Footer />
        </main>

    )
}

ReactDOM.render(<HomeComponent/>, document.getElementById("app"))