import React from "react";
import "../css/Profile.css";
import avatar from "../assets/images/avatar.jpg";
import oglas1 from "../assets/images/oglas1.png";
import { getUserInfo } from "../services/UserService";
import { getByUsername } from "../services/AdService";
import { getCommentsByUsername } from "../services/CommentService";
import {stripHtml} from "../StringUtil";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope, faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import BigAd from "../components/BigAd";
import { concat } from "lodash";

class Profile extends React.Component {
    state={
        user: {},
        location: "",
        ads: [],
        comments: [],
        showCommentModal: false,
        bigAd: null
    }

    async getByUsername() {
        try {
          const data = await getByUsername(this.props.match.params.username);
          this.setState({ ads: data.slice(0,3), adsLoaded: true });
        } catch (err) {
          console.log(err.message);
        }
      }
    
      async getCommentsByUsername() {
        try {
          const data = await getCommentsByUsername(this.props.match.params.username);
          this.setState({ comments: data });
        } catch (err) {
          console.log(err.message);
        }
      }
    
      async componentDidMount() {
        try {
            const data = await getUserInfo(
            this.props.match.params.username
          );
          await this.setState({ user: data, location: data.location.value });
        } catch (err) {
          console.log(err.message);
        }
            await this.getByUsername();
            await this.getCommentsByUsername();
        }

        handleAdClick = (id) => {
            var bigAd = this.state.ads.find((x) => x.id === id);
            bigAd.user = this.state.user;
            this.setState({bigAd: bigAd});
        }

        handleBigAdClick = () => {
            this.setState({bigAd: null})
        }


	render() {
        const adsList = this.state.ads.map((ad) => {
            return (
                <div class="Oglas" key={ad.id} onClick={() => this.handleAdClick(ad.id)}>
                    <img src={oglas1} alt="slika oglasa" />
                    <h2 class="imeOglasa">{ad.title}</h2>
                    <p class="opisOglasa">{stripHtml(ad.description).length > 115? stripHtml(ad.description).slice(0, 115).concat("...") : stripHtml(ad.description)}</p>
                    <div class="pogledajOglas"><p>Pogledaj oglas {">"}</p></div>
                </div>
            );
          });
          const commentsList = this.state.comments.map((comment) => (
                <div class="Komentar">
                    <div class="komentarContainer">
                        <div class="komentarHeader">
                            <img class="komentarAvatar" src={avatar} alt="slika korisnika komentara" />
                            <h2 class="username">{comment.username}</h2>
                            <p class="datum">{comment.creationDate}</p>
                        </div>
                        <div class="komentarLike">
                            {comment.positive? <FontAwesomeIcon icon={faThumbsUp} style={{fontSize:"30px"}} /> : <FontAwesomeIcon icon={faThumbsDown} style={{fontSize:"30px"}} />}
                        </div>
                    </div>
                    <div class="komentarBody">
                        <div class= "vertical"></div>
                        <p class="komentartekst">{comment.comment}</p>
                    </div>
                </div>
          ));
		return (
            <div className="profile">
                <div class="profilSection1">
                    <img class="avataricon" src={avatar} alt="user avatar" style={{boxShadow: "2px 2px 1px #ccc"}} />
                    <div class="generalInfo">
                        <p class="ime">{this.state.user.firstName+" "+this.state.user.lastName}</p>
                        <p class="lokacija"> <FontAwesomeIcon icon={faMapMarkerAlt} /> {this.state.location}</p>
                        <p class="broj"> <FontAwesomeIcon icon={faPhoneAlt} /> {this.state.user.phoneNumber}</p>
                        <p class="email"> <FontAwesomeIcon icon={faEnvelope} /> {this.state.user.email}</p>
                    </div>
                    <hr class="hrsolid" />
                    <div class="likes">
                        <p> <FontAwesomeIcon icon={faThumbsUp} /> {this.state.user.positiveRatings} <FontAwesomeIcon icon={faThumbsDown} /> {this.state.user.negativeRatings} </p>
                        {
                        this.props.token? 
                        <Link to={`/user/${this.props.user && this.props.user.id ? this.props.user.id: null}/edit-profile`}>
                        <input type="button" class="oceniKor" value="IZMENI PROFIL" /> </Link> :
                        <input type="button" onClick={() => this.setState({showCommentModal: true})} class="oceniKor" value="OCENI KORISNIKA" />
                        }
                    </div>
                    <hr class="hrsolid" />
                    <div class="about">
                        <p class="aboutNaslov">O KORISNIKU</p>
                        <p class="aboutOpis">{this.state.user.details? this.state.user.details : "Korisnik jos uvek nije uneo informacije o sebi."}</p>
                    </div>
                </div>
                <div class="profilSection2">
                    <h1 class="naslov">Oglasi</h1>
                    <div class="oglasContainer">
                        {this.state.bigAd ? <div> <BigAd ad={this.state.bigAd} click={this.handleBigAdClick} /> </div> : adsList}
                    </div>           
                <div>
                   <Link to={"/profile-ads/"+concat(this.state.user.username)}> <input type="button" class="sviOglasi" value="SVI OGLASI >" /> </Link>
                </div>
                </div>
                <hr class="hrsolid" />
                <div class="profilSection3">
                    <h1 class="naslov">Komentari</h1>
                    <div class="pomeranjeDesno">
                        {!this.props.token &&  <input type="button" onClick={() => this.setState({showCommentModal: true})} class="oceniKor2" value="OCENI KORISNIKA" />}                   
                    </div>
                    {commentsList}
                </div>
            </div> 
		);
	}
}

const mapStateToProps = (state) => {
	return {
        user: state.userReducer.user,
		token: state.authenticationReducer.token
	};
};

export default connect(mapStateToProps)(Profile);
