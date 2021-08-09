import React from "react";
import "../../css/ui/AdTypeModal.css";

const AdTypeModal = (props) => {
	if (!props.show) {
		return null;
	}
	return (
		<div className="modal" id="typeModal" role="dialog" tabindex="-1" aria-hidden="true">
			<div className="modal-content">
				<div className="modal-header">
					<p className="modal-title">Promocija oglasa</p>
				</div>
				<div className="modal-body">
					<div className="modal-ad-type-section">
						<p className="ad-type-title">- VIP -</p>
						<p className="ad-type-body">
							Osigurajte da Vaš oglas uvek bude istaknut prvi, na samom vrhu pretrage po izuzetno jeftinoj
							ceni. U svakoj potkategoriji može da postoji samo jedan VIP oglas. Jedan dan košta 50
							dinara, a najmanmje je moguće rezervisati 7 dana. Dobar marketing se uvek isplati :)
						</p>
					</div>
					<div className="modal-ad-type-section">
						<p className="ad-type-title">- Premium -</p>
						<p className="ad-type-body">
							Drugi vid plaćenog oglasa. Po ceni od 150 dinara nedeljno, učinite da Vaš oglas bude bolje
							istaknut i sortiran zajedno sa ostalim Premium oglasima, tik ispod VIP oglasa.
						</p>
					</div>
					<div className="modal-ad-type-section">
						<p className="ad-type-title">- Classic -</p>
						<p className="ad-type-body">
							Besplatan oglas za one koji žele da se oglase bez ikakve novčane naknade.
						</p>
					</div>
					<div className="modal-ad-type-note">
						<p className="ad-type-note-body">
							* Uplate se vrše slanjem SMS-a sa tekstom VIP ili Premium, u zavisnosti od toga za koji
							paket ste se odlučili na broj 1312. Nakon uplate dobićete odgovor koji sadrži kod koji je
							neophodno unet i u odgovarajuće polje čime se potvrđuje uplata.
						</p>
					</div>
				</div>
				<div className="modal-footer">
					<button onClick={props.onClose} className="modal-button" data-dismiss="modal">
						Close
					</button>
				</div>
			</div>
		</div>
	);
};

export default AdTypeModal;
