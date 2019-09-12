import React from 'react';
// import our connect function so we can connect our component(s)
import { connect } from 'react-redux';

import AddedFeature from './AddedFeature';

const AddedFeatures = ({ car, removeFeature }) => {
  return (
    <div className="content">
      <h6>Added features:</h6>
      {car.features.length ? (
        <ol type="1">
          {car.features.map(item => (
            <AddedFeature key={item.id} feature={item} removeFeature={removeFeature}/>
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

// connect our component(s) to the store
const mapStateToProps = state => {
  return {
    car: state.car
  }
}

export default connect(
  mapStateToProps,
  {}
)(AddedFeatures);
