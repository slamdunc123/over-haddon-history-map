import { useNavigate} from 'react-router-dom'
import ImageHotspots from 'react-image-hotspots';

import './styles.css';

const MainMap = () => {
    const navigate = useNavigate();

    const handleClick = (e) => {
        navigate(`/section/${e.target.id}`)
    }
    return (
        <div className='main-map-image'>
				<ImageHotspots
					src='../../assets/images/over-haddon-map.jpg'
					alt='Sample image'
					hideFullscreenControl
					hideZoomControls
					hideMinimap
					hotspots={[
						{
							key: 1,
							x: 25,
							y: 25,
							content: (
								<button id={1} onClick={(e) => handleClick(e)}>
									1
								</button>
							),
						},
						{
							key: 2,
							x: 75,
							y: 25,
							content: (
								<button id={2} onClick={(e) => handleClick(e)}>
									2
								</button>
							),
						},
						{
							key: 3,
							x: 25,
							y: 75,
							content: (
								<button id={3} onClick={(e) => handleClick(e)}>
									3
								</button>
							),
						},
						{
							key: 4,
							x: 75,
							y: 75,
							content: (
								<button id={4} onClick={(e) => handleClick(e)}>
									4
								</button>
							),
						},
					]}
				/>
			</div>
    )
}

export default MainMap
