import { createStore } from 'redux';
import root from '../reducers/root_reducer';


const configureStore = () => createStore(root);

export default configureStore;