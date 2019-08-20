import React, {Component} from 'react';
import ArrowContainer from '../src/ArrowContainer';
import ArrowElement from '../src/ArrowElement';
import {data} from './data';

const laneStyle = {display: 'flex', flexDirection: 'column', border: 'solid', borderColor: 'blue'};
const cardStyle = {display: 'flex', border: 'solid', padding: '10px 10px 10px 10px', margin: '10px 10px 10px 10px'};
const style = {overflow: 'scroll', height: '600px'};



class FirstExample extends Component {

    constructor (props) {
        super(props);
        this.state = {
            scrolled: false,
            data
        }
    }

    componentDidMount() {
        window.document.getElementById(1).addEventListener('scroll', this.handleScroll.bind(this), { passive: true })
        window.document.getElementById(2).addEventListener('scroll', this.handleScroll.bind(this), { passive: true })
        window.document.getElementById(3).addEventListener('scroll', this.handleScroll.bind(this), { passive: true })
    }

    componentWillUnmount() {
        window.document.getElementById(1).removeEventListener('scroll', this.handleScroll.bind(this))
        window.document.getElementById(2).removeEventListener('scroll', this.handleScroll.bind(this))
        window.document.getElementById(3).removeEventListener('scroll', this.handleScroll.bind(this))
    }

    handleScroll(event) {
        console.log('event', event);
        this.setState({
            scrolled: true
        });
    }

    handleArrowClick = (sourceId, targetId) => {
        let sourceCard;
        let targetCard;
        console.log(`source id ${sourceId} target id ${targetId}`);
        const newData = this.state.data;
        newData.forEach((lane) => {
             lane.cards.forEach(card => {
                 if(card.id === sourceId) {
                   sourceCard = card
                 }
                 if(card.id === targetId) {
                     targetCard = card
                 }
             });
        });
        const sourceRelationIndex = sourceCard.relations.findIndex((relation) => relation.targetId === targetId);
        sourceCard.relations.splice(sourceRelationIndex,1);
        targetCard.relations.push({
            targetId: sourceId ,
            targetAnchor: 'right',
            sourceAnchor: 'right',

        });
        console.log("new data", newData)
        this.state = {
            data: newData
        }
        this.setState({ ...this.state });
    };


     renderLanes() {
        return this.state.data.map((lane) => {
            return (
                <div key={lane.id} style={style} id={lane.id}>
                    <h1>{lane.name}</h1>
                    <div style={laneStyle}>
                        {this.renderCards(lane.cards)}
                    </div>
                </div>
            );
        })
    }

     renderCards(cards) {
        return cards.map((card) => {
            return (
                <ArrowElement
                    id={card.id}
                    relations={card.relations}
                    key={card.id}
                >
                    <div key={card.id} style={cardStyle}>
                        <h2>{card.name} {card.id}</h2>
                        <img src={card.img} width={100} height={100}/>
                    </div>
                </ArrowElement>
            );
        });
    }

    render() {
         debugger
        return (
            <div style={{height: '600px', margin: '50px'}} >
                <ArrowContainer strokeColor="red" onArrowClick={this.handleArrowClick}>
                    <div style={{display: 'flex', justifyContent: 'space-around'}} id='parent'>
                        {this.renderLanes()}
                    </div>
                </ArrowContainer>
            </div>
        );
    }

}

export default FirstExample;
