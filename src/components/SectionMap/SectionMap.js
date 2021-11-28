import { useState, useEffect } from 'react';
import ImageHotspots from 'react-image-hotspots';
import { Modal, Button } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';

import sectionData from './sectionData';

import './styles.css';

const SectionMap = () => {
	const [show, setShow] = useState(false);
	const [data, setData] = useState([]);
	const [modalTitle, setModalTitle] = useState('Title');
	const [modalBody, setModalBody] = useState('Title');

	const navigate = useNavigate();

	// get id from url
	const params = useParams();
	const sectionId = params.id;

	const sectionIds = ['1', '2','3', '4'];

	// get values from section map data
	const getTitle = (id) => {
		const newData = data[0].sectionInfo;
		const result = newData.filter((d) => d.id == id);
		if (result.length > 0) {
			setModalTitle(result[0].title);
			setModalBody(result[0].body);
		} else setModalTitle('');
	};

	const handleShow = (e) => {
		getTitle(e.target.id);
		setShow(true);
	};
	const handleClose = () => setShow(false);

	const getImageHotSpots = (id) => {
		switch (id) {
			case '1':
				return (
					<ImageHotspots
						src='../../assets/images/over-haddon-section1-map.jpg'
						alt='Sample image'
						hideFullscreenControl
						hideZoomControls
						hideMinimap
						hotspots={[
							{
								key: 1,
								x: 10,
								y: 3,
								content: (
									<button
										id={1}
										onClick={(e) => handleShow(e)}
									></button>
								),
							},
							{
								key: 2,
								x: 40,
								y: 70,
								content: (
									<button
										id={2}
										onClick={(e) => handleShow(e)}
									></button>
								),
							},
							{
								key: 3,
								x: 80,
								y: 30,
								content: (
									<button
										id={3}
										onClick={(e) => handleShow(e)}
									></button>
								),
							},
						]}
					/>
				);
			case '2':
				return (
					<ImageHotspots
						src='../../assets/images/over-haddon-section2-map.jpg'
						alt='Sample image'
						hideFullscreenControl
						hideZoomControls
						hideMinimap
						hotspots={[
							{
								key: 1,
								x: 25,
								y: 15,
								content: (
									<button
										id={1}
										onClick={(e) => handleShow(e)}
									></button>
								),
							},
							{
								key: 2,
								x: 22,
								y: 28,
								content: (
									<button
										id={2}
										onClick={(e) => handleShow(e)}
									></button>
								),
							},
							{
								key: 3,
								x: 21,
								y: 35,
								content: (
									<button
										id={3}
										onClick={(e) => handleShow(e)}
									></button>
								),
							},
							{
								key: 4,
								x: 21,
								y: 40,
								content: (
									<button
										id={4}
										onClick={(e) => handleShow(e)}
									></button>
								),
							},
							{
								key: 5,
								x: 20,
								y: 45,
								content: (
									<button
										id={5}
										onClick={(e) => handleShow(e)}
									></button>
								),
							},
							{
								key: 6,
								x: 20,
								y: 51,
								content: (
									<button
										id={6}
										onClick={(e) => handleShow(e)}
									></button>
								),
							},
						]}
					/>
				);

			case '3':
				return (
					<ImageHotspots
						src='../../assets/images/over-haddon-section3-map.jpg'
						alt='Sample image'
						hideFullscreenControl
						hideZoomControls
						hideMinimap
						hotspots={[
							{
								key: 1,
								x: 10,
								y: 30,
								content: (
									<button
										id={1}
										onClick={(e) => handleShow(e)}
									></button>
								),
							},
							{
								key: 2,
								x: 40,
								y: 70,
								content: (
									<button
										id={2}
										onClick={(e) => handleShow(e)}
									></button>
								),
							},
							{
								key: 3,
								x: 80,
								y: 30,
								content: (
									<button
										id={3}
										onClick={(e) => handleShow(e)}
									></button>
								),
							},
						]}
					/>
				);
			case '4':
				return (
					<ImageHotspots
						src='../../assets/images/over-haddon-section4-map.jpg'
						alt='Sample image'
						hideFullscreenControl
						hideZoomControls
						hideMinimap
						hotspots={[
							{
								key: 1,
								x: 10,
								y: 30,
								content: (
									<button
										id={1}
										onClick={(e) => handleShow(e)}
									></button>
								),
							},
							{
								key: 2,
								x: 40,
								y: 70,
								content: (
									<button
										id={2}
										onClick={(e) => handleShow(e)}
									></button>
								),
							},
							{
								key: 3,
								x: 80,
								y: 30,
								content: (
									<button
										id={3}
										onClick={(e) => handleShow(e)}
									></button>
								),
							},
						]}
					/>
				);
			default:
				break;
		}
	};

	// filter all section data to get specific section data
	useEffect(() => {
		if (sectionIds.includes(sectionId)) {
			const results = sectionData.filter((d) => d.sectionId == sectionId);
			setData(results);
		} else {
			navigate('/');
		}
	}, [sectionId]);

	return (
		<>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>{modalTitle}</Modal.Title>
				</Modal.Header>
				<Modal.Body>{modalBody}</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>

			<div className='section-map-image'>
				{getImageHotSpots(params.id)}
			</div>
		</>
	);
};

export default SectionMap;
