import React from 'react';
import {connect} from 'react-redux';

import {fetchCat} from '../actions/catAction';
import {fetchDog} from '../actions/dogAction';

import './adoptionList.css';

export class AdoptApet extends React.Component{

    componentDidMount(){
        this.props.dispatch(fetchCat());
        this.props.dispatch(fetchDog());
    }

    render(){
        return (
            <div id="wrap">
                <h1> Here are the pets for adoption </h1>
                <div id="left">
                    <h2> Cat </h2>
                    <hr></hr>
                    
                    <img src={this.props.catToAdopt.imageURL} alt = ''/>
                    <ul><b>Name:</b> {this.props.catToAdopt.name}</ul>
                    <ul><b>Gender:</b> {this.props.catToAdopt.gender}</ul>
                    <ul><b>Age:</b> {this.props.catToAdopt.age}</ul>
                    <ul><b>Breed:</b> {this.props.catToAdopt.breed}</ul>
                    <ul><b>{this.props.catToAdopt.name}'s story:</b> 
                        {this.props.catToAdopt.story}</ul>
                    <button type='button' className='catAdopt' onClick={()=> this.props.dispatch(fetchCat())}>Adopt</button>
                </div>
                <div id="right">
                    <h2> Dog </h2>
                    <hr></hr>
                    <img src={this.props.dogToAdopt.imageURL} alt = ''/>
                    <ul><b>Name:</b> {this.props.dogToAdopt.name}</ul>
                    <ul><b>Gender:</b> {this.props.dogToAdopt.gender}</ul>
                    <ul><b>Age:</b> {this.props.dogToAdopt.age}</ul>
                    <ul><b>Breed:</b> {this.props.dogToAdopt.breed}</ul>
                    <ul><b>{this.props.dogToAdopt.name}'s story:</b> 
                        {this.props.dogToAdopt.story}</ul>
                    <button type='button' className='dogAdopt' onClick={()=> this.props.dispatch(fetchDog())}>Adopt</button>

                </div>
         
            </div>
        );
        
    }

}
// <img src={require('./images/fluffy.jpg')} alt = " "/>
//<img src={`http://localhost:8080/images/${this.props.catToAdopt.imageURL}`} alt = ''/>
const mapStateToProps = (state, props) => ({
    catToAdopt: state.cat,
    dogToAdopt: state.dog
});

export default connect(mapStateToProps)(AdoptApet);

