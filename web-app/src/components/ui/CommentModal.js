import React from "react";
import TextArea from "./TextArea";
import "../../css/ui/CommentModal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { faThumbsDown } from "@fortawesome/free-regular-svg-icons";



const CommentModal = (props) => {
	if (!props.show) {
		return null;
	}
	return (
		<div className="modal" id="typeModal" role="dialog" tabindex="-1" aria-hidden="true" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)"}}>
			<div className="modal-comment-content" style={{ marginLeft: "20%", marginTop: "50px" , alignSelf: "center", width: "60%", backgroundColor: "#ffffff", border: "1px", borderColor: "#d1ad75" }}>
				<div className="modal-comment-header" >
					<p className="modal-comment-title">Kako biste ocenili iskustvo sa korisnikom?</p>
				</div>
				<div className="modal-comment-body">
					<div className="row">
						<div className="modal-comment-positive-section">
							<FontAwesomeIcon
								icon={faThumbsUp}
								style={{ color: "grey", margin: "20px 0px 20px 0", fontSize: "84px", alignSelf: "center"}}
							/>
						</div>
						<div className="modal-comment-negative-section">
							<FontAwesomeIcon
								icon={faThumbsDown}
								style={{ color: "grey", margin: "20px 0px 20px 0", fontSize: "84px" }}
							/>
						</div>
					</div>
                    <div className="modal-comment-text-section">
                        <p className="your-comment-text">
                            Vaš komentar:
                        </p>
                        <TextArea
                            name="userComment"
                            type="text"
                            rows="5"
                            placeholder="Komentar će biti vidljiv na korisnikovom profilu"
                        />
                    </div>
				</div>
				<div className="modal-comment-footer">
					<button
						type="button"
						className="btn gold-btn-comment"
						onClick={props.onClose}
						data-dismiss="modal"
					>
						Ostavi komentar
					</button>
                    <button
						type="button"
						className="btn oposite-btn-comment"
						onClick={props.onClose}
						data-dismiss="modal"
					>
						Odustani
					</button>
				</div>
			</div>
		</div>
	);
};

export default CommentModal;
