import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../header/Header";
import Plant from "../../plant/Plant";
import { connect } from "react-redux";
import { fetchAllTips } from "../../../redux/actions/tipsActionsCreators";


const Home = ({ loading, plants, dispatchFetchAllTipsAction }) => {

  useEffect(() => dispatchFetchAllTipsAction(), [dispatchFetchAllTipsAction]);
  return (
    <div className="homeWrapper">
        <Header />
          <div>
            <br />
              <Link to="newTip" className="btn btn-outline-secondary ml-5" >Add new tip</Link>
          </div>
          <div>
            <Plant plants={plants} />
          </div>
    </div>
  );
};

const mapStateToProps = state => ({
  loading: state.loading,
  plants: state.plants
});

const mapDispatchToProps = dispatch => ({
    dispatchFetchAllTipsAction: () => dispatch(fetchAllTips())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);