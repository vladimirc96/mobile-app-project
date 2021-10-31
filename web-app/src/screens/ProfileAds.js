import React from "react";
import AdCombined from "../components/AdCombined";
import SideBanner from "../layout/SideBanner";
import { connect } from "react-redux";
import { getByUsername } from "../services/AdService";
import { getUserInfo } from "../services/UserService";

class ProfileAds extends React.Component {
	state = {
		ads: [],
        user: {}
      };

      async getAllByUserName(username) {
        try {
          const data = await getByUsername(
            username
          );
          const user = await getUserInfo(username);
          for(var i = 0; i < data.length; i++){
              data[i].user = user;
          }  
          this.setState({ ads: data, user: user});
        } catch (err) {
          this.setState({ ads: [] });
          console.log(err.message);
        }
      }

	componentDidMount(){
		this.getAllByUserName(this.props.match.params.username);
	}

	render() {
		const adsList = this.state.ads.map((ad) => (
			<AdCombined key={ad.id} ad={ad} />
		));
		return (
			<div className="container-fluid">
				<div class="row" style={{ marginTop: "125px" }}>
					<SideBanner />
					<div class="col-sm-8" style={{marginTop: "-95px"}}>
						{adsList}
					</div>
					<SideBanner />
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		subcategory: state.subcategoryReducer.selectedSubcategory
	};
};

export default connect(mapStateToProps)(ProfileAds);




