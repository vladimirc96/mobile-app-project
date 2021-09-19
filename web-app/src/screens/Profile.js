import React from "react";
import "../css/Profile.css";
import avatar from "../assets/images/avatar.jpg";
import oglas1 from "../assets/images/oglas1.png";
import dislike from "../assets/images/ThumbsDown.png";
import { getUserInfo } from "../services/UserService";
import { getByUsername } from "../services/AdService";
import { getCommentsByUsername } from "../services/CommentService";
import {stripHtml} from "../StringUtil";
import CommentModal from "../components/ui/CommentModal";

class Profile extends React.Component {
    state={
        user: {},
        location: "",
        ads: [],
        comments: [],
        showCommentModal: false
    }

    async getByUsername() {
        try {
          const data = await getByUsername(this.props.match.params.username);
          this.setState({ ads: data, adsLoaded: true });
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


	render() {
        const adsList = this.state.ads.map((ad) => {
            return (
                <div class="Oglas" key={ad.id}>
                    <img src={oglas1} alt="slika oglasa" />
                    <h2 class="imeOglasa">{ad.title}</h2>
                    <p class="opisOglasa">{stripHtml(ad.description)}</p>
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
                            <img src={comment.positive? dislike : dislike} alt="slika oglasa" />
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
                <CommentModal show={this.state.showCommentModal} userId={this.state.user.id} />
                <div class="profilSection1">
                    <img class="avataricon" src={avatar} alt="user avatar" />
                    <div class="generalInfo">
                        <p class="ime">{this.state.user.firstName+" "+this.state.user.lastName}</p>
                        <p class="lokacija">{this.state.location}</p>
                        <p class="broj">{this.state.user.phoneNumber}</p>
                        <p class="email">{this.state.user.email}</p>
                    </div>
                    <hr class="hrsolid" />
                    <div class="likes">
                        <p>{this.state.user.positiveRatings+" "+this.state.user.positiveRatings}</p>
                        <input type="button" onClick={() => this.setState({showCommentModal: true})} class="oceniKor" value="OCENI KORISNIKA" />
                    </div>
                    <hr class="hrsolid" />
                    <div class="about">
                        <p class="aboutNaslov">O KORISNIKU</p>
                        <p class="aboutOpis">{this.state.user.details}</p>
                    </div>
                </div>
                <div class="profilSection2">
                    <h1 class="naslov">Oglasi</h1>
                    <div class="oglasContainer">
                        {adsList}
                    </div>
                <div>
                    <input type="button" class="sviOglasi" value="SVI OGLASI >" />
                </div>
                </div>
                <hr class="hrsolid" />
                <div class="profilSection3">
                    <h1 class="naslov">Komentari</h1>
                    <div class="pomeranjeDesno"><input type="button" onClick={() => this.setState({showCommentModal: true})} class="oceniKor2" value="OCENI KORISNIKA" /></div>
                    {commentsList}
                    <div class="pagination">
                        <a href="/">1</a>
                        <a href="/">2</a>
                        <a href="/">3</a>
                        <a href="/" class="tacke">...</a>
                        <a href="/">7</a>
                    </div>
                </div>
            </div> 
		);
	}
}

export default Profile;
