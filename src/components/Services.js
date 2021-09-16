import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";
import {browserHistory} from 'react-router';



const images = [
    { url: "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2600&q=80" },
    { url: "https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" },
  ];

const sliderOptions = {
    useGPURender: true,
    showNavs: true,
    showBullets: true,
    navStyle: 1,
    navSize: 50,
    navMargin: 30,
    duration: 1.0,
    bgColor: "#fff"
}

class Services extends React.Component {

    constructor(props){
        super(props);
    }
    callLink(event){
     alert('you clicked me');
     this.props.history.push("www.google.com");
    }
    render(){
    return (
        <div className="service-page">
            <SimpleImageSlider
            style={{ margin: '0 auto', padding: '2%', borderRadius: '50%' }}
        width={504}
        height={504}
        images={images}
        showBullets={sliderOptions.showBullets}
        showNavs={sliderOptions.showNavs}
        startIndex={0}
        useGPURender={sliderOptions.useGPURender}
        navStyle={sliderOptions.navStyle}
        navSize={sliderOptions.navSize}
        navMargin={sliderOptions.navMargin}
        slideDuration={sliderOptions.duration}
        onClick={this.callLink}
      />
        </div>
    )
}
}

export default Services;
