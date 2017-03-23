import { connect } from 'react-redux'
import APIList from '../components/APIList'


const mapStateToProps = (state) => ({
    items : state.items,
    loading: state.loading
})

const VisibleAPIList = connect(mapStateToProps)(APIList);

export default VisibleAPIList;