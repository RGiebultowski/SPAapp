import React from 'react';
import {Route, Switch} from 'react-router-dom';
import '../styles/Header.css';

//images
import img1 from '../img/3.jpg';
import img2 from '../img/8_web.jpg';
import img3 from '../img/9_web.jpg';
import img4 from '../img/Dennis-4.jpg';
import img5 from '../img/2.jpg';

const images = [img1, img2, img3, img4, img5];

class Header extends React.Component {

    state = {
        images,
        currentImg: 0,
    }

    componentDidMount() {
       this.interval = setInterval(this.changeImage.bind(this), 3000)
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    changeImage(){
        console.log("jestem tutaj")
        const index = Math.floor(Math.random() * images.length)

        this.setState({
            currentImg: index,
        });
    }

    render() {
        const { currentImg } = this.state
        console.log(currentImg)
        return (
        <>
            <Switch>
                <Route path="/" exact render={()=>(
                    <img src={images[currentImg]} alt="x"/>
                )}/>
                <Route exact render={()=>(
                    <img src={images[currentImg]} alt="x"/>
                )}/>
            </Switch>
        </>
        );
    }
}
 
export default Header;