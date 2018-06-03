import React, { Component } from 'React';

class ReactImageAppear extends Component {
    constructor(props) {
        super(props);

        this.onLoad = this.onLoad.bind(this);
    }

    componentDidMount() {
        const img = this.refs.img;
        console.log('mounted');

        var styleInterval = setInterval(function () {
            if (Number(window.getComputedStyle(img).width.match(/[0-9]+/)) && Number(window.getComputedStyle(img).height.match(/[0-9]+/))) {
                clearInterval(styleInterval);
                console.log(window.getComputedStyle(img).width);
                console.log(window.getComputedStyle(img).height);
            }
        }, 10);
    }

    onLoad() {
        console.log('loaded');
    }

    render() {
        return <img onLoad={this.onLoad} ref="img" src="https://newevolutiondesigns.com/images/freebies/tropical-beach-background-8.jpg" />
    }
}

export default ReactImageAppear;