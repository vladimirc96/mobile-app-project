import React from "react";
import TextArea from "./TextArea";
import "../../css/ui/CommentModal.css";

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
				<div className="row modal-comment-body">
					<div className="modal-comment-positive-section">
                        <button
                            type="button"
                            className="btn gold-btn"
                            onClick={props.onClose}
                            data-dismiss="modal"
                        >
                            Odustani
                        </button>
					</div>
                    <div className="modal-comment-negative-section">
                        <button
                            type="button"
                            className="btn gold-btn"
                            onClick={props.onClose}
                            data-dismiss="modal"
                        >
                            Odustani
                        </button>
					</div>
                    <div className="modal-comment-text-section">
                        <p className="your-comment-text">
                            Vaš komentar:
                        </p>
                        <TextArea
                            name="userComment"
                            type="text"
                            rows="4"
                            placeholder="Komentar će biti vidljiv na korisnikovom profilu"
                        />
                    </div>
					
				</div>
				<div className="modal-comment-footer">
					<button
						type="button"
						className="btn gold-btn"
						onClick={props.onClose}
						data-dismiss="modal"
					>
						Ostavi komentar
					</button>
                    <button
						type="button"
						className="btn gold-btn"
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
