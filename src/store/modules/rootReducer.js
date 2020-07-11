import { combineReducers } from 'redux';
import tags from './tags/reducer';
import cards from './cards/reducer';

export default combineReducers({ tags, cards });
